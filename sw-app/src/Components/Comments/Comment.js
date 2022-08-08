import styles from '../Comments/Comment.module.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { deleteBattleComment, deleteCharacterComment } from '../../services/commentsService';
import { Link } from 'react-router-dom'


export const Comment = ({
    comment,
    userAction,
    type,
    setComments,
}) => {

    const { user } = useContext(AuthContext)

    const deleteHandler = async (commentId) => {
        if (window.confirm('Are you sure you want to delete your comment?')) {
            if (type === 'character') {
                await deleteCharacterComment(commentId)
            } else if (type === 'battle') {
                await deleteBattleComment(commentId)
            }
            setComments(state => state.filter(x => x._id !== commentId))
        }

    }

    return (
        <>
            <div className={styles["comment-container"]}>
                <section className={styles["profile-section"]}>
                    <p className={styles["username"]} >{comment.profileData?.username}</p>
                    <img className={styles["picture"]} src={comment.profileData?.profileImg} alt="" />
                    <p className={styles["rank"]}>Rank: {comment.profileData?.title}</p>
                    <p className={styles["moto"]}>"{comment.profileData?.moto}"</p>
                </section>
                <section className={styles["comment-section"]}>
                    <div className={styles["buttons-wrapper"]}>
                        {typeof user.email !== 'undefined' ? <> {
                            user._id === comment._ownerId ? <>
                                <button onClick={() => deleteHandler(comment._id)} className={styles["del-comment-btn"]}>Delete</button>
                                <Link className={styles['edit-comment-btn']} onClick={() => userAction("EditComment")} to={`${comment._id}`}>Edit Comment</Link>
                            </>
                                : null}</>
                            : null}
                    </div>
                    <hr />
                    <p className={styles["comment-text"]}>{comment.content}</p>
                </section>
            </div>
        </>
    )
}