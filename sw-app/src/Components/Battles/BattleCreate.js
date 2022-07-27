import { useLocation } from "react-router-dom"
import { Character } from "../Character/Character";
export const BattleCreate = () => {
    const location = useLocation();
    const { characters } = location.state;

    return (
        <div className="battle-create">
            <section className="characters-panel">

            </section>
            <section className="character-statistics">
                
            </section>
        </div>
    )

}