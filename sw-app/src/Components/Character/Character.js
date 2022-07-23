import styles from '../Character/Character.module.css'
import { Link } from 'react-router-dom'


export const Character = (props) => {

    return (
        <div onClick={props.clickEv} className={
            props.characterData.allegiance === 'Dark Side'
                ? `${styles['short-card']} ${styles['dark-side']}`
                : `${styles['short-card']} ${styles['light-side']}`
        }>
            <img src={props.characterData.img} alt="" />
            <h2>{props.characterData.name}</h2>
            <section className={styles['stats-bar']}>
                <div className={styles['stats-wrapper']}>
                    {props.characterData.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/TcTRP7m/Png-Item-1381523.png" alt="" />
                        : <img src="https://i.ibb.co/0nhqKwp/icon-lightsaber-1.png" alt="" />}
                    <p className={styles['stat-number']}>Dueling: {props.characterData.dueling}
                    </p>
                </div>
                <div className={styles['stats-wrapper']}>
                    {props.characterData.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />}

                    <p className={styles['stat-number']}>Force: {props.characterData.force}</p>
                </div>

            </section>

            <button key={props.characterData._id} ><Link to={`/characters/${props.characterData._id}`} >Details</Link> </button>

        </div>
    )
}