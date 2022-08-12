import { Link } from "react-router-dom"
import styles from '../Navigation/Paginator.module.css'

export const Paginator = ({
    charactersPerPage,
    totalCharacters,
    paginate
}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles['paginator-wrapper']}>
            <ul>
                {pageNumbers.map(n => (
                    <li key={n}>
                        <Link to={'#'} onClick={() => paginate(n)}>{n}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}