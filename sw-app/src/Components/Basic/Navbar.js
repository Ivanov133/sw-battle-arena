import styles from '../Basic/navbar.module.css'
import { GiSwordTie, GiExplodingPlanet, GiRobe, GiRun, GiOverlordHelm } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const setStyleColor = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['inactive-link']
    }

    return (<>
        <nav className={styles['nav-panel']}>
            <ul>
                <li><NavLink to="/" className={setStyleColor}><GiExplodingPlanet />Home</NavLink></li>
                <li><NavLink to="/characters" className={setStyleColor}><GiRobe />Catalog</NavLink></li>
                <li><NavLink to="/" className={setStyleColor}> <GiSwordTie />Battles</NavLink></li>
                <li><NavLink to="/" className={setStyleColor}><GiOverlordHelm />My Profile</NavLink></li>
                <li><NavLink to="/" className={setStyleColor}><GiRun />Logout</NavLink></li>
            </ul>
                        <div className='img-wrapper'>
                <img src="https://i.ibb.co/xj0389H/Pik-Png-com-outline-png-203957.png" alt="" />
                <p>BATTLE ARENA</p>
            </div> 
        </nav>

    </>
    )
}