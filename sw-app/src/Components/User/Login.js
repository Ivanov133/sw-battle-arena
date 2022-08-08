import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import { getUserDetails, login } from "../../services/userService"
import { useNavigate } from "react-router-dom"
import styles from './Login.module.css'

export const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const { userLogin } = useContext(AuthContext)

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    function onSubmit(ev) {
        ev.preventDefault()
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(ev.target.parentNode))

        login(email, password)
            .then(authData => {
                userLogin(authData)
                navigate('/')
            })
    }

    return (
        <div className={styles["form-wrapper"]}>
            <form>
                <label htmlFor="email">Email</label>
                <input onChange={changeHandler} value={values.email} type="text" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input onChange={changeHandler} value={values.password} type="password" id="password" name="password" required />
                <button onClick={(ev) => onSubmit(ev)}>Login</button>
            </form >
        </div>
    )
}