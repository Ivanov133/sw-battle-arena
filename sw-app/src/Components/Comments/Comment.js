import styles from '../Comments/Comment.module.css'
import { GiRoundStar } from "react-icons/gi";
import { useContext, useEffect, useState } from 'react';
import { getProfiles } from '../../services/userService';
import { AuthContext } from '../../contexts/authContext';
import { CharacterEditForm } from '../Forms/CharacterEditForm';
import { CommentEditForm } from '../Forms/CommentEditForm';


export const Comment = ({
    comment,
    userAction,
    formType,
    onClose,
    setComments

}) => {
    /*     const [profileData, setProfileData] = useState({})
        const { user } = useContext(AuthContext)
        console.log(user);
    
        useEffect(() => {
            getProfiles()
                .then(profile => {
                    setProfileData(profile.map(p => p._ownerId === user._id))
                }
                )
        }) */

    const { user } = useContext(AuthContext)

    return (
        <>
            <div className={styles["comment-container"]}>
                <section className={styles["profile-section"]}>
                    <p className={styles["username"]} >{comment.profileData?.username}</p>
                    <img className={styles["picture"]} src={comment.profileData?.profileImg} alt="" />
                    {/* <div className={styles["rank-stars"]}>
                        {comment.user.rank.allegiance === "Light Side"
                            ? Array(5).fill(<GiRoundStar className={styles["light-side"]} />)
                            : Array(5).fill(<GiRoundStar className={styles["dark-side"]} />)
                        }
                    </div> */}
                    <p className={styles["rank"]}>Rank: {comment.profileData?.title}</p>
                    <p className={styles["moto"]}>"{comment.profileData?.moto}"</p>
                </section>
                <section className={styles["comment-section"]}>
                    <div className={styles["buttons-wrapper"]}>
                        {typeof user.email !== 'undefined' ? <> {
                            user._id === comment._ownerId ? <>
                                <button onClick={() => userAction("EditComment")} className={styles["edit-comment-btn"]}>Edit</button>
                                <button onClick={() => userAction("DeleteComment")} className={styles["del-comment-btn"]}>Delete</button>
                            </>
                                : null}</>
                            : null}

                        {formType === "EditComment" && <CommentEditForm setComments={setComments} onClose={onClose} comment={comment} />}

                    </div>
                    <hr />
                    <p className={styles["comment-text"]}>{comment.content}</p>
                </section>
            </div>
        </>
    )
}