import {  useState } from "react"
import { Comment } from "./Comment"
import styles from './CharacterCommentsSection.module.css'
import { CommentCreateForm } from "../Forms/CommentsForms/CommentCreateForm"

export const CharacterCommentsSection = ({
    closeHandler,
    formType,
    userAction,
    comments,
    setComments,
    
}) => {
    const [displaySection, setDisplaySection] = useState('Hide')

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
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                        type={'character'}
                        formType={formType}
                        userAction={userAction}
                        setComments={setComments}
                        onClose={closeHandler}
                    />)
                    : <p className={styles["info-msg"]}>No comments available for this character</p>}
            </div>
            {formType === "PostComment" && <CommentCreateForm
                onClose={closeHandler}
                setComments={setComments}
            />}
        </div>
    )
}