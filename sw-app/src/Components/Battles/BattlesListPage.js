import { useEffect, useState } from "react"
import { getAllBattles } from "../../services/battlesService"
import { BattlePreviewCard } from "./BattlePreviewCard"
import styles from './BattlesListPage.module.css'

export const BattlesListPage = () => {
    const [battles, setBattles] = useState([])


    useEffect(() => {
        getAllBattles()
            .then(result => { 
                setBattles(result)
             })
    }, [])

    return (
        <div className={styles["battles-catalog"]}>
            {Array.isArray(battles) 
            ? battles.map(x => <BattlePreviewCard key={x._id} battle={x} />) 
            : <p>There are currently no battles</p>}
        </div>
    )

}