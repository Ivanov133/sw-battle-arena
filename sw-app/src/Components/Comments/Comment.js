import styles from '../Comments/Comment.module.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { deleteBattleComment, deleteCharacterComment } from '../../services/commentsService';
import { Link } from 'react-router-dom'
import { getProfileById } from '../../services/userService';


export const Comment = ({
    comment,
    userAction,
    type,
    setComments,
}) => {

    const { user } = useContext(AuthContext)
    const [profile, setProfile] = useState()

    useEffect(() => {
        getProfileById(comment.profileId)
            .then(result => { setProfile(result) })
    }, [comment.profileId])

    console.log(profile);

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
                    <p className={styles["username"]} >{profile?.username}</p>
                    <img className={styles["picture"]} src={profile?.profileImg} alt="" />
                    <p className={styles["rank"]}>Rank: {profile?.title}</p>
                    <p className={styles["moto"]}>"{profile?.moto}"</p>
                </section>
                <section className={styles["comment-section"]}>
                    <div className={styles["buttons-wrapper"]}>
                        {typeof user.email !== 'undefined' ? <> {
                            user._id === comment._ownerId ? <>
                                <button onClick={() => deleteHandler(comment._id)} className={styles["del-comment-btn"]}>Delete</button>
                                <Link className={styles['edit-comment-btn']} onClick={() => userAction("EditComment")} to={`${comment._id}`}>Edit</Link>
                            </>
                                : null}</>
                            : null}
                    </div>
                    <hr />
                    <p className={styles["comment-text"]} value="">{comment.content}</p>
                </section>
            </div>
        </>
    )
}