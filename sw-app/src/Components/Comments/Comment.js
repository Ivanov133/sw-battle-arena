import styles from '../Comments/Comment.module.css'
import { GiRoundStar } from "react-icons/gi";

export const Comment = ({
    comment
}) => {
    return (
        <>
            <div className={styles["comment-container"]}>
                <section className={styles["profile-section"]}>
                    <p className={styles["username"]} >{comment.user.username}</p>
                    <img className={styles["picture"]} src={comment.user.picture} alt="" />
                    <div className={styles["rank-stars"]}>
                        {comment.user.rank.allegiance === "Light Side"
                            ? Array(5).fill(<GiRoundStar className={styles["light-side"]} />)
                            : Array(5).fill(<GiRoundStar className={styles["dark-side"]} />)
                        }
                    </div>
                    <p className={styles["rank"]}>Rank: {comment.user.rank.title}</p>
                    <p className={styles["moto"]}>"{comment.user.moto}"</p>
                </section>
                <section className={styles["comment-section"]}>
                    <div className={styles["buttons-wrapper"]}>
                        <button className={styles["edit-comment-btn"]}>Edit</button>
                        <button className={styles["del-comment-btn"]}>Delete</button>
                    </div>
                    <hr />
                    <p className={styles["comment-text"]}>{comment.text}</p>
                </section>
            </div>
        </>
    )
}