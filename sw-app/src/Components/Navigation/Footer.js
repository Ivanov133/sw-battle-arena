import { NavLink } from 'react-router-dom'
import styles from '../Navigation/Footer.module.css'


export const Footer = () => {
    const setStyleColor = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['inactive-link']
    }
    return (
        <footer className={styles['footer-main']}>
            <ul>
                <li><NavLink to="/introduction" className={setStyleColor}>Site Introduction</NavLink></li>
            </ul>
        </footer>
    )
}