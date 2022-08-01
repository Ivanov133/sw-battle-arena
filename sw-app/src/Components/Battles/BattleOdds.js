import styles from "./BattleOdds.module.css"


export const BattleOdds = ({
    character1,
    character2,
}) => {
    return (
        <section className={styles["battle-odds-panel"]}>
            <h3>{character1.name} VS {character2.name} - Chance to win in:</h3>
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
            <div className={styles['force-full-power-wrapper']}>
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
                <div className={styles["full-power"]}>
                    <h4>All out battle</h4>
                    <span className={styles['first-char-stat']}>10%</span>
                    <span className={styles['second-char-stat']}>90%</span>
                    <img src="https://i.ibb.co/yy864NN/5a32bf7047e2870dc3bf81a5d8c7db1e361c329f-00-removebg-preview.png" alt="" />
                </div>
            </div>
        </section>
    )
}