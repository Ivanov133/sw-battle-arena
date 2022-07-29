import { useLocation } from "react-router-dom"



export const BattleCreate = () => {
    const location = useLocation();
    const { data } = location.state;
    const [character1, character2] = data

    return (
        <div className="battle-create">
            <section className="characters-panel">

            </section>
            <section className="character-statistics">

            </section>
        </div>
    )

}