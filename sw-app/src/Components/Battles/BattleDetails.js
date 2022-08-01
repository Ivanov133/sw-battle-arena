import { Character } from "../Character/Character";
import styles from "./BattleDetails.module.css"
import { BattleOdds } from "./BattleOdds";
import { GiZeusSword } from "react-icons/gi";


export const BattleDetails = ({
    character1,
    character2,
}) => {

    return (
        <div className={styles["battle-create"]}>
            <section className={styles["character-panel"]}>
                <div className={styles['feats']}>
                    <ul>
                        {character1.feats?.map(f => <li key={character1.feats.indexOf(f)}><GiZeusSword className={styles['feat-icon']} />{f}</li>)}
                    </ul>
                </div>
                <Character character={character1}></Character>
                <Character character={character2}></Character>
                <div className={styles['feats']}>
                    <ul>
                        {character2.feats?.map(f => <li key={character2.feats.indexOf(f)}><GiZeusSword className={styles['feat-icon']} />{f}</li>)}
                    </ul>
                </div>
            </section>
            <BattleOdds character1={character1} character2={character2} />
        </div>
    )

}