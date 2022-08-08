import { useState, useEffect } from "react"
import { Comment } from "./Comment"
import styles from './BattleCommentsSection.module.css'
import { getAllBattleComments } from "../../services/commentsService"
import { useParams } from "react-router-dom"
import { CommentCreateForm } from "../Forms/CommentCreateForm"
import { CommentEditForm } from "../Forms/CommentEditForm"

export const BattleCommentsSection = ({
    closeHandler,
    formType,
    userAction,
}) => {
    const [comments, setComments] = useState([])
    const [displaySection, setDisplaySection] = useState('Hide')
    const { battleId, commentId } = useParams()

    useEffect(() => {
        getAllBattleComments()
            .then(
                result => {
                    if (result) {
                        let battleComments = result.filter(x => x.battle_id === battleId)
                        setComments(battleComments)
                    }
                }
            )
    }, [battleId, commentId])

    function showComments() {
        if (displaySection === 'Show') {
            setDisplaySection('Hide')
        } else {
            setDisplaySection('Show')

        }
    }

    return (
        <div>
            <header className={styles['comments-header']}>
                <h1 onClick={showComments}>{displaySection} comments section</h1>
            </header>
            <div style={displaySection === "Show" ? { display: 'none' } : { display: 'block' }}>
                {Array.isArray(comments)
                    ?
                    comments?.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                        type={'battle'}
                        formType={formType}
                        userAction={userAction}
                        onClose={closeHandler}
                        setComments={setComments} />)
                    : <p className={styles["info-msg"]}>No comments available for this character</p>}
            </div>
            {formType === "PostBattleComment" && <CommentCreateForm
                setComments={setComments}
                onClose={closeHandler}
                formType={formType}
            />}
            {formType === "EditComment" && <CommentEditForm onClose={closeHandler} setComments={setComments} />}
            
        </div>
    )
}