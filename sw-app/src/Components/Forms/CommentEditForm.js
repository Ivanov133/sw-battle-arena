import { useEffect, useState } from 'react'
import styles from '../Forms/CommentEditForm.module.css'
import { editBattleComment, editCharacterComment, getBattleComment, getCharacterComment } from '../../services/commentsService'
import { useParams } from 'react-router-dom'

export const CommentEditForm = ({
    onClose,
    setComments,
}) => {

    const [comment, setComment] = useState('')
    const { charId, battleId, commentId } = useParams()


    const [values, setValues] = useState({
        content: comment.content
    })

    const [errors, setErrors] = useState({
        content: false,
    })
    useEffect(() => {
        if (charId) {
            getCharacterComment(commentId).then(result => {
                setComment(result)
                setValues(values => values.content = result)
            })
        } else if (battleId) {
            getBattleComment(commentId).then(result => {
                setComment(result)
                setValues(values => values.content = result)
            })
        }
    }, [commentId, charId, battleId])


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
        data['profileData'] = comment.profileData

        if (charId) {
            data['characterId'] = charId

            editCharacterComment(commentId, data).then(comment => {
                setComments(state => {
                    const oldData = state.filter(x => x._id !== comment._id)
                    return {
                        ...oldData,
                        comment
                    }
                }
                )
            })
        } else if (battleId) {
            editBattleComment(commentId, data).then(comment => {
                setComments(state => {
                    const oldData = state.filter(x => x._id !== comment._id)
                    return {
                        ...oldData,
                        comment
                    }
                }
                )
            })
        }

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