import styles from '../Character/CharacterDetails.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GiZeusSword } from "react-icons/gi";
import { AiOutlineComment, AiTwotoneEdit } from "react-icons/ai";
import { CharacterEditForm } from '../Forms/CharacterEditForm';
import { Comment } from '../Comments/Comment'

export const CharacterDetails = () => {
    const { charId } = useParams()
    const [character, setCharacter] = useState([])
    const [formType, setFormType] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/characters/${charId}`)
            .then(res => res.json())
            .then(
                result => {
                    setCharacter(result)
                }
            )
    }, [charId])

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/comments/`)
            .then(res => res.json())
            .then(
                result => {
                    setComments(result)
                }
            )
    }, [])

    function userAction(action) {
        setFormType(action)
    }

    function closeHandler() {
        setFormType(null);
    };

    return (
        <>
            <div key={charId} className={styles['character-details']}>
                <div className={styles['image-wrapper']}>
                    <img src={character.fullImg} alt="" />
                    <h1>{character.name}</h1>
                    <section>
                        <div>
                            {character.allegiance === 'Dark Side'
                                ? <img src="https://i.ibb.co/TcTRP7m/Png-Item-1381523.png" alt="" />
                                : <img src="https://i.ibb.co/0nhqKwp/icon-lightsaber-1.png" alt="" />}
                            <p>Dueling: {character.dueling}
                            </p>
                        </div>
                        <div >
                            <img src="https://i.ibb.co/YNGX5SJ/5a32bf7047e2870dc3bf81a5d8c7db1e361c329f-00.jpg" alt="" />

                            <p>Full Power: {character.fullPower}</p>
                        </div>
                        <div>
                            {character.allegiance === 'Dark Side'
                                ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                                : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />}

                            <p>Force: {character.force}</p>
                        </div>


                    </section>
                    <div className='feats'>
                        <ul>
                            {character.feats?.map(f => <li><GiZeusSword />{f}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={styles['content']}>
                    {character.quote ?
                        < p className={styles['quote-text']}>{character.quote} - {character.author}</p>
                        : null}
                    <p className={styles['full-description']}>
                        {character.description}
                    </p>
                    <div className={styles['buttons']}>
                        <button onClick={() => userAction("Edit")} className={styles['edit-btn']}><AiTwotoneEdit /> Edit character</button>
                        <button onClick={() => userAction("Delete")} className={styles['delete-btn']}><AiTwotoneEdit /> Delete character</button>
                        <button className={styles['add-btn']}><AiOutlineComment />Add Comment</button>
                    </div>

                </div>
                {formType === "Edit" && <CharacterEditForm onClose={closeHandler} character={character} setCharacter={setCharacter} />}
            </div>
            <div className="comments-section">
                {comments.map(comment => <Comment commentData={comment} />)}
            </div>
        </>
    )
}