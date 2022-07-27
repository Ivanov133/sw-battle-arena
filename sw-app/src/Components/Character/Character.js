import styles from '../Character/Character.module.css'
import { Link } from 'react-router-dom'


export const Character = ({
    character,
    clickEv
}) => {

    return (
        <div onClick={clickEv} className={
            character.allegiance === 'Dark Side'
                ? `${styles['short-card']} ${styles['dark-side']}`
                : `${styles['short-card']} ${styles['light-side']}`
        }>
            <img src={character.shortImg} alt="" />
            <h2>{character.name}</h2>
            <section className={styles['stats-bar']}>
                <div className={styles['stats-wrapper']}>
                    {character.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/TcTRP7m/Png-Item-1381523.png" alt="" />
                        : <img src="https://i.ibb.co/0nhqKwp/icon-lightsaber-1.png" alt="" />}
                    <p className={styles['stat-number']}>Dueling: {character.dueling}
                    </p>
                </div>
                <div className={styles['stats-wrapper']}>
                    {character.allegiance === 'Dark Side'
                        ? <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        : <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />}

                    <p className={styles['stat-number']}>Force: {character.force}</p>
                </div>

            </section>

            <button key={character._id} ><Link to={`/characters/${character._id}`} >Details</Link> </button>

        </div>
    )
}