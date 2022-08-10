import { useEffect, useState } from "react"
import { calcOdds } from "../../helpers/battleCalculations"
import styles from "./BattleOdds.module.css"

export const BattleOdds = ({
    character1,
    character2,
}) => {

    const odds = {
        "dueling": calcOdds(Number(character1.dueling), Number(character2.dueling)),
        "force": calcOdds(Number(character1.force), Number(character2.force)),
        "fullPower": calcOdds(Number(character1.fullPower), Number(character2.fullPower)),
    }

    const bar1Width = (odds.dueling[0] / 100) * 400
    const bar2Width = (odds.dueling[1] / 100) * 400

    return (
        <section className={styles["battle-odds-panel"]}>
            <h3>{character1.name} VS {character2.name} - Chance to win in:</h3>
            <div className={styles["dueling-wrapper"]}>
                <h4>Melee Battle</h4>
                <img src="https://i.ibb.co/Jq671fD/kindpng-2353764.png" alt="" />
                <div
                    className={styles["dueling-bar1"]}
                    style={{ width: bar1Width }}>
                    <span>{odds.dueling[0]}%</span>
                </div>
                <div
                    className={styles["dueling-bar2"]}
                    style={{ width: bar2Width }}>
                    <span>{odds.dueling[1]}%</span>
                </div>
            </div>
            <div className={styles['force-full-power-wrapper']}>
                <div className={styles["force-wrapper"]}>
                    <h4>Force Battle</h4>
                    {character1.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />
                    }
                    <span className={styles["force-odd1"]}>{odds.force[0]}%</span>
                    {character2.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />
                    }
                    <span className={styles["force-odd2"]}>{odds.force[1]}%</span>
                </div>
                <div className={styles["full-power"]}>
                    <h4>All out battle</h4>
                    <span className={styles['first-char-stat']}>{odds.fullPower[0]}%</span>
                    <span className={styles['second-char-stat']}>{odds.fullPower[1]}%</span>
                    <img src="https://i.ibb.co/yy864NN/5a32bf7047e2870dc3bf81a5d8c7db1e361c329f-00-removebg-preview.png" alt="" />
                </div>
            </div>
        </section>
    )
}