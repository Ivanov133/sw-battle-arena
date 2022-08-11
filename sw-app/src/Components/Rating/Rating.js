import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/authContext";
import { calcRating } from "../../helpers/ratingsCalculator";
import { getAllCharacterRatings, postCharacterRating } from "../../services/ratingService";
import styles from './Rating.module.css'

export const Rating = ({
    id,
}) => {

    const { user } = useContext(AuthContext)
    const [characterRatingsList, setCharacterRatingsList] = useState([])
    const [curretRating, setCurrentRating] = useState()
    const [userHasRated, setUserHasRated] = useState("unrated")

    useEffect(() => {
        getAllCharacterRatings().then(result => {
            const ratings = result.filter(x => {
                if (x._ownerId === user._id && x.character_id == id) {
                    setUserHasRated("rated")
                }
                if (x.character_id === id) {
                    return x
                }
            })
            setCharacterRatingsList(ratings)
            setCurrentRating(calcRating(ratings))

        })
    }, [])

    console.log(characterRatingsList);
    console.log(curretRating);

    const onRate = (ev) => {
        const clickedRating = Number(ev.target.value)

        if (userHasRated === "rated") {
            return alert("Already Rated");
        }

        const body = {
            "character_id": id,
            "rating_value": clickedRating
        }

        if (window.confirm(`Do you want to rate this character with ${clickedRating} stars?`)) {
            postCharacterRating(body).then(
                result => {
                    setCurrentRating(calcRating([...characterRatingsList, result]))
                    setCharacterRatingsList(state => [...state, result])
                    setUserHasRated("rated")
                }
            )
        }


    }

    return (
        <section className={styles["star-section"]}>
            <h4>Rating: {curretRating} / 10</h4>
            <div className={styles["stars-wrapper"]}>
                {characterRatingsList ? <ul>
                    {[...Array(10)].map((e, i) =>
                        <li className={styles[`${userHasRated}`]} key={i}><button className={styles[`${userHasRated}`]}  value={i + 1} onClick={(ev) => onRate(ev)} disabled={userHasRated === "rated" ? true : false}>&#9733;</button></li>
                    )}
                </ul> : null}
            </div>
            <p>Voted by {characterRatingsList.length} users {userHasRated === "rated" ? "(Already voted)" : null}</p>
        </section>
    )

}