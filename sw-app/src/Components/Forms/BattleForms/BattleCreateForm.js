import { useNavigate } from 'react-router-dom'
import { createBattle } from '../../../services/battlesService'
import styles from '../BattleForms/BattleCreateForm.module.css'

export const BattleCreateForm = ({
    character1,
    character2,
}) => {
    const navigate = useNavigate()

    function onSubmit(ev) {
        ev.preventDefault()
        const characterIds = {
            'characterIds': [character1._id, character2._id]
        }
        createBattle(characterIds)
            .then(result => {
                console.log(result);
                navigate(`/battle-details/${result._id}`)
            })
        

    }

    return (
        <form className={styles['battle-create-form']}>
            <button className={styles["submit-btn"]} onClick={(ev) => onSubmit(ev)}>Upload Battle</button>
        </form>
    )

}