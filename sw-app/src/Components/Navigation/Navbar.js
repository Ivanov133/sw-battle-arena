import styles from '../Navigation/navbar.module.css'
import { GiSwordTie, GiRobe, GiRun, GiOverlordHelm } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export const Navbar = () => {
    const { user } = useContext(AuthContext)

    const setStyleColor = ({ isActive }) => {
        return isActive
            ? styles['active-link']
            : styles['inactive-link']
    }
    return (<>
        <nav className={styles['nav-panel']}>
            <ul>
                <li><NavLink to="/characters" className={setStyleColor}><GiRobe />Catalog</NavLink></li>
                <li><NavLink to="/battles-catalog" className={setStyleColor}> <GiSwordTie />Battles</NavLink></li>
                <li>
                    <NavLink to="/" className={setStyleColor}>
                        <div title='Home Page' className={styles['img-wrapper']}>
                            <img src="https://i.ibb.co/xj0389H/Pik-Png-com-outline-png-203957.png" alt="" />
                            <p>BATTLE ARENA</p>
                        </div>
                    </NavLink>

                </li>
                {user.email
                    ? <>
                        <li><NavLink to={`/profile/${user._id}`} className={setStyleColor}><GiOverlordHelm />My Profile</NavLink></li>
                        <li><NavLink to="/logout" className={setStyleColor}><GiRun />Logout</NavLink></li>
                    </>
                    : <>
                        <li><NavLink to="/login" className={setStyleColor}><GiOverlordHelm />Login</NavLink></li>
                        <li><NavLink to="/register" className={setStyleColor}><GiRun />Register</NavLink></li>
                    </>
                }


            </ul>

        </nav>

    </>
    )
}