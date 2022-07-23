import { Link } from 'react-router-dom'
import styles from "../Battles/BattlePanel.module.css"


export const BattlePanel = (props) => {
    return (
        <div style={{ display: props.data.length > 0 ? '' : 'none' }} title="Selected characters" className={styles['battle-panel']} >
        {props.data.length === 1
            ? <img className={styles['character-img']} src={props.data[0].img} alt="" />
            : null
        }
        {props.data.length === 2
            ? <>
                <img className={styles['character-img']} src={props.data[0].img} alt="" />
                <img className={styles['vs-img']} src="https://i.ibb.co/ZS1382W/Versus-PNG-Image-File.png" alt="" />
                <img className={styles['character-img']} src={props.data[1].img} alt="" />
                <div title="Start Battle" className={styles['battle']} >


                    <Link to={"../battle-create/"} state={{ data: props.data }}>
                        <img src="https://i.ibb.co/zS4qNwZ/transparent-sword-icon-vikings-icon-swords-icon-60bc20b3a15aa4-1746426716229418756609.png" alt="" />
                        Battle
                    </Link>

                </div>
            </>
            : null
        }
    </div>

    )
}