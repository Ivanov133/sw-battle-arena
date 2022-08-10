import { useContext, useEffect, useState } from 'react'
import styles from '../CommentsForms/CommentCreateForm.module.css'
import { AuthContext } from '../../../contexts/authContext'
import { createBattleComment, createCharacterComment } from '../../../services/commentsService'
import { getProfiles } from '../../../services/userService'
import { useParams } from 'react-router-dom'

export const CommentCreateForm = ({
    onClose,
    setComments,
    formType,
}) => {

    const [profile, setProfile] = useState({})
    const { user } = useContext(AuthContext)
    const { charId, battleId } = useParams()

    useEffect(() => {
        getProfiles()
            .then(result => {
                const match = result.find(x => x._ownerId === user._id)
                setProfile(match)

            })
    }, [user._id])

    const [values, setValues] = useState({
        content: ''
    })

    const [errors, setErrors] = useState({
        content: false,
    })

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validateLength = (e, minLength) => {
        if (values[e.target.name].length < minLength) {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: true,
                })
            )
        } else {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: false,
                })
            )
        }
    }

    function onSubmit(ev) {
        ev.preventDefault()
        for (let key in errors) {
            if (errors[key]) {
                return alert("Not all input fields are valid!");
            }
        }

        for (let key in values) {
            if (values[key] === '') {
                return alert("All fields are mandatory");
            }
        }

        let data = Object.fromEntries(new FormData(ev.target.parentNode))
        data['profileId'] = profile?._id

        if (formType === 'PostBattleComment' && battleId) {
            data['battle_id'] = battleId
            createBattleComment(data).then(comment => setComments(
                oldData => [...oldData, comment]
            ))

        } else {
            data['characterId'] = charId
            createCharacterComment(data).then(comment => setComments(
                oldData => [...oldData, comment]
            ))
        }


        onClose()
    }

    return (
        <div className={styles['form-comment']}>
            <div onClick={onClose} title="Cancel">
                <img src="https://i.ibb.co/0XzFW4q/Delete-Red-X-Button-Transparent.png" alt="" />
            </div>
            <form>
                <label htmlFor="content">Comment</label>
                <textarea onBlur={(e) => validateLength(e, 15)} onChange={changeHandler} value={values.content} placeholder='Type your comment here...' id="content" type="content" name="content" />
                {errors.content && <p>Comment must be at least 15 symbols long</p>}
                <button onClick={(ev) => onSubmit(ev)} className={styles['submit-comment-btn']} >Post comment</button>
            </form>
        </div>
    )
}