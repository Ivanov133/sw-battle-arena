import { useContext, useEffect, useState } from 'react'
import styles from '../Forms/CommentEditForm.module.css'
import { AuthContext } from '../../contexts/authContext'
import { editCharacterComment } from '../../services/commentsService'
import { getProfiles } from '../../services/userService'
import { useParams } from 'react-router-dom'

export const CommentEditForm = ({
    onClose,
    setComments,
    comment,
}) => {

    const [profile, setProfile] = useState({})
    const { user } = useContext(AuthContext)
    const {characterId} = useParams()

    useEffect(() => {
        getProfiles()
            .then(result => {
                const match = result.find(x => x._ownerId === user._id)
                setProfile(match)

            })
    }, [])

    const [values, setValues] = useState({
        content: comment.content
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
        data['profileData'] = profile.profileData
        data['characterId'] = characterId

        editCharacterComment(comment._id, data).then(comment => setComments(
            oldData => {
                const newList = oldData.filter(c => c._id !== comment._id)
                setComments(
                    ...oldData,
                    comment
                )
            }
        )

        )
        onClose()
    }

    return (
        <div className={styles['form-edit-comment']}>
            <div onClick={onClose} title="Cancel">
                <img src="https://i.ibb.co/0XzFW4q/Delete-Red-X-Button-Transparent.png" alt="" />
            </div>
            <form>
                <label htmlFor="content">Comment</label>
                <textarea onBlur={(e) => validateLength(e, 15)} onChange={changeHandler} value={values.content} placeholder='Type your comment here...' id="content" type="content" name="content" />
                {errors.content && <p>Comment must be at least 15 symbols long</p>}
                <button onClick={(ev) => onSubmit(ev)} className={styles['edit-comment-btn']}>Edit comment</button>
            </form>
        </div>
    )
}