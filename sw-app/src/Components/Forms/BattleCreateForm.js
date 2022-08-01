import styles from '../Forms/BattleCreateForm.module.css'

export const BattleCreateForm = ({
    character1,
    character2,
}) => {

    function onSubmit(ev) {
        ev.preventDefault()
        console.log("TEST")
    }

    return (
        <form className={styles['battle-create-form']}>
            <button className={styles["submit-btn"]} onClick={(ev) => onSubmit(ev)}>Upload Battle</button>
        </form>
    )

}