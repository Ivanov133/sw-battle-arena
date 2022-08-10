import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteBattle, getBattle } from "../../services/battlesService"
import { getCharacter } from "../../services/characterService"
import { BattleCommentsSection } from "../Comments/BattleCommentsSection"
import { BattleDetails } from "./BattleCharactersDetails"
import styles from "../Battles/BattleDetailsPage.module.css"
import { AuthContext } from "../../contexts/authContext"

export const BattleDetailsPage = () => {

    const { battleId } = useParams()
    const { user } = useContext(AuthContext)
    const [battle, setBattle] = useState()
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
                setBattle(result)
                getCharacter(result.characterIds[0])
                    .then(char1 => { setCharacter1(char1) })
                getCharacter(result.characterIds[1])
                    .then(char2 => { setCharacter2(char2) })
            })
    }, [battleId])

    const onDelete = () => {
        if (window.confirm('Are you sure you want to delete your battle?')) {
            deleteBattle(battleId)
            navigate('/battles-catalog')
        }
    }

    return (
        <div className={styles['battle-wrapper']}>
            <BattleDetails character1={character1} character2={character2} />
            <button className={styles['add-btn']} onClick={() => userAction('PostBattleComment')}>Add comment</button>
            {battle?._ownerId === user._id
                ? <button className={styles['del-btn']} onClick={onDelete}>Delete battle</button>
                : null}
            <BattleCommentsSection userAction={userAction} formType={formType} closeHandler={closeHandler} battleId={battleId} />
        </div>
    )
}