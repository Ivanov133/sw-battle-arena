import styles from '../Character/CharacterDetails.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { GiZeusSword } from "react-icons/gi";
import { AiOutlineComment, AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { CharacterEditForm } from '../Forms/CharacterEditForm';
import { deleteCharacter, getCharacter } from '../../services/characterService';
import { AuthContext } from '../../contexts/authContext'


export const CharacterDetails = ({
    userAction,
    closeHandler,
    formType,

}) => {
    const { user } = useContext(AuthContext)
    const { charId } = useParams()
    const [character, setCharacter] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCharacter(charId)
            .then(
                result => {
                    setCharacter(result)
                }
            )
    }, [charId])

    const deleteHandler = async () => {

        if (window.confirm('Are you sure you want to delete this character?')) {
            await deleteCharacter(charId)
            navigate('/characters')

        }
    }

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
                            <img src="https://i.ibb.co/yy864NN/5a32bf7047e2870dc3bf81a5d8c7db1e361c329f-00-removebg-preview.png" alt="" />
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
                        <div>
                            {character.feats?.map(f => <p key={character.feats.indexOf(f)}><GiZeusSword />{f}</p>)}
                        </div>
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
                        {character._ownerId === user._id
                            ? <>
                                <button onClick={() => userAction("EditCharacter")} className={styles['edit-btn']}><AiTwotoneEdit /> Edit character</button>
                                <button onClick={deleteHandler} className={styles['delete-btn']}><AiOutlineDelete /> Delete character</button>
                            </>
                            : null}
                        {user.email
                            ?
                            <button onClick={() => userAction("PostComment")} className={styles['add-btn']}><AiOutlineComment />Add Comment</button>
                            : null}
                    </div>
                </div>
                {formType === "EditCharacter" && <CharacterEditForm onClose={closeHandler} character={character} setCharacter={setCharacter} />}

            </div>

        </>
    )
}