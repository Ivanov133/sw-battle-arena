import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCharacter } from "../../services/characterService";
import { Character } from "../Character/Character";
import styles from "./BattleCreate.module.css"


export const BattleCreate = () => {
    const { characterIds } = useParams()
    const [character1_id, character2_id] = characterIds.split('VS')
    const [character1, setCharacter1] = useState('')
    const [character2, setCharacter2] = useState('')


    useEffect(() => {
        getCharacter(character1_id)
            .then(result =>
                setCharacter1(result)
            )
    }, [character1_id])

    useEffect(() => {
        getCharacter(character2_id)
            .then(result =>
                setCharacter2(result)
            )
    }, [character2_id])


    return (
        <div className={styles["battle-create"]}>
            <section className={styles["character-panel"]}>
                <Character character={character1}></Character>
                <Character character={character2}></Character>
            </section>
            <section className={styles["battle-odds-panel"]}>
                <div className={styles["dueling-wrapper"]}>
                    <h4>Melee Battle</h4>
                    <img src="https://i.ibb.co/Jq671fD/kindpng-2353764.png" alt="" />

                    <div
                        className={styles["dueling-bar1"]}
                        style={{ width: '250px' }}>
                        <span>58%</span>

                    </div>
                    <div
                        className={styles["dueling-bar2"]}
                        style={{ width: '150px' }}>
                        <span>42%</span>
                    </div>
                </div>
                <div className={styles["force-wrapper"]}>
                    <h4>Force Battle</h4>
                    {character1.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />
                    }
                    <span className={styles["force-odd1"]}>25%</span>
                    {character2.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />
                    }
                    <span className={styles["force-odd2"]}>75%</span>

                </div>
            </section>
        </div>
    )

}