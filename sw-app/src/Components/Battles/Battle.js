import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getBattle } from "../../services/battlesService"
import { getCharacter } from "../../services/characterService"
import { BattleCommentsSection } from "../Comments/BattleCommentsSection"
import { BattleDetails } from "./BattleDetails"
import styles from "../Battles/Battle.module.css"

export const Battle = () => {

    const { battleId } = useParams()
    const [character1, setCharacter1] = useState([])
    const [character2, setCharacter2] = useState([])
    const [formType, setFormType] = useState(null)
    const navigate = useNavigate()

    function userAction(action) {
        setFormType(action)
    }

    const closeHandler = () => {
        navigate(`/battle-details/${battleId}/`, { replace: true });
        setFormType(null);
    };

    useEffect(() => {
        getBattle(battleId)
            .then(result => {
                getCharacter(result.characterIds[0])
                    .then(char1 => { setCharacter1(char1) })
                getCharacter(result.characterIds[1])
                    .then(char2 => { setCharacter2(char2) })
            })
    }, [battleId])

    return (
        <div className={styles['battle-wrapper']}>
            <BattleDetails character1={character1} character2={character2} />
            <button className={styles['add-btn']} onClick={() => userAction('PostBattleComment')}>Add comment</button>
            <BattleCommentsSection userAction={userAction} formType={formType} closeHandler={closeHandler} battleId={battleId} />
        </div>
    )
}