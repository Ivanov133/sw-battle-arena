import styles from '../Comments/Comment.module.css'

export const Comment = ({
    comment
}) => {
    console.log(comment);
    return (
        <>
            <div className={styles["comment-container"]}>
                <section className={styles["profile-section"]}>
                    <p className={styles["username"]} >{comment.user.username}</p>
                    <img className={styles["picture"]} src={comment.user.picture} alt="" />
                    <p className={styles["rank"]}>{comment.user.rank}</p>
                    <p className={styles["moto"]}>{comment.user.moto}</p>
                </section>
                <section className={styles["comment-section"]}>
                    <p className={styles["somment-text"]}>{comment.text}</p>
                </section>
            </div>
        </>
    )
}