import { useLocation } from "react-router-dom"
import { Character } from "../Character/Character";
import styles from "./BattleCreate.module.css"

export const BattleCreate = () => {
    const location = useLocation();
    const { data } = location.state;
    const [character1, character2] = data

    return (
        <div className={styles["battle-create"]}>
            <section className={styles["character-panel"]}>
                <Character character={character1}></Character>
                <Character character={character2}></Character>
            </section>
            <section className={styles["battle-odds-panel"]}>
                <h4>Melee battle</h4>
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
            </section>
        </div>
    )

}