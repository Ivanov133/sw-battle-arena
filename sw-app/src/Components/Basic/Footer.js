import { NavLink } from 'react-router-dom'
import styles from '../Basic/Footer.module.css'


export const Footer = () => {
    const setStyleColor = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['inactive-link']
    }
    return (
        <footer className={styles['footer-main']}>
            <ul>
                <li><NavLink to="/" className={setStyleColor}>About Us</NavLink></li>
                <li><NavLink to="/characters" className={setStyleColor}>User Guide</NavLink></li>

            </ul>
        </footer>
    )
}