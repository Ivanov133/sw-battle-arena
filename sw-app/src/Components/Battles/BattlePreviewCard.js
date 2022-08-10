import { useEffect, useState } from 'react'
import { getCharacter } from '../../services/characterService'
import styles from './BattlePreviewCard.module.css'
import { useNavigate } from 'react-router-dom'
import { calcOdds } from '../../helpers/battleCalculations'

export const BattlePreviewCard = ({
    battle
}) => {

    const [character1, setCharacter1] = useState('')
    const [character2, setCharacter2] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getCharacter(battle.characterIds[0])
            .then(result => { setCharacter1(result) })
    }, [battle.characterIds])

    useEffect(() => {
        getCharacter(battle.characterIds[1])
            .then(result => { setCharacter2(result) })
    }, [battle.characterIds])


    const showDetails = () => {
        navigate(`/battle-details/${battle._id}`)
    }

    const odds = {
        "fullPower": calcOdds(Number(character1.fullPower), Number(character2.fullPower)),
    }

    const bar1Width = (odds.fullPower[0] / 100) * 400
    const bar2Width = (odds.fullPower[1] / 100) * 400

    return (
        <div onClick={showDetails} className={styles["battle-cards-wrapper"]}>
            <div className={styles["battle-card"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={character1.fullImg} alt="" />
                    <img src={character2.fullImg} alt="" />
                </div>
                <img className={styles['vs-img']} src="https://i.ibb.co/ZS1382W/Versus-PNG-Image-File.png" alt="" />
            </div>
            <div className={styles["odds-wrapper"]}>
                <div
                    className={styles["odds-bar1"]}
                    style={{ width: bar1Width }}>
                    <span>{odds.fullPower[0]}%</span>
                </div>
                <div
                    className={styles["odds-bar2"]}
                    style={{ width: bar2Width }}>
                    <span>{odds.fullPower[1]}%</span>
                </div>
            </div>
        </div>
    )
}