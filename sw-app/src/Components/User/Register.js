import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import { createProfile, register } from "../../services/userService"
import styles from './Register.module.css'

export const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        repass: '',
        username: '',
        allegiance: '',
        moto: '',
        profileImg: 'https://i.ibb.co/p380hYQ/1870286df48feb862c26e7437707683d.jpg',
    })

    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()

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
            repass,
            moto,
            profileImg,
            allegiance,
            username,
        } = Object.fromEntries(new FormData(ev.target.parentNode))

        const profileData = {
            "ProfileData": {
                moto,
                profileImg,
                allegiance,
                username,
            }
        }

        if (password !== repass) {
            return alert('Passwords must be the same')
        }

        register(email, password, )
            .then(authData => {
                userLogin(authData)
                createProfile(profileData)
                navigate('/')
            }
            )
    }

    return (
        <div className={styles["form-wrapper"]}>
            <form>
                <label htmlFor="email">Email</label>
                <input onChange={changeHandler} value={values.email} type="text" id="email" name="email" required />

                <label htmlFor="username">Username</label>
                <input onChange={changeHandler} value={values.username} type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input onChange={changeHandler} value={values.password} type="password" id="password" name="password" required />

                <label htmlFor="repass">Repeat Password</label>
                <input onChange={changeHandler} value={values.repass} type="password" id="repass" name="repass" required />

                <label htmlFor="profileImg">Profile picture URL:</label>
                <input onChange={changeHandler} value={values.profileImg} type="text" id="profileImg" name="profileImg" required />

                <div className={styles['profile-img-preview']}>
                    <img src={values.profileImg} alt="" />
                    <h4>Profile img view</h4>

                </div>

                <label htmlFor="allegiance">Allegiance</label>
                <select onChange={changeHandler} value={values.allegiance} id="allegiance" name="allegiance">
                    <option value="Dark Side">Dark Side</option>
                    <option value="Light Side">Light Side</option>
                </select>

                <label htmlFor="moto">Moto</label>
                <input onChange={changeHandler} value={values.moto} type="text" id="moto" name="moto" required />

                <button onClick={(ev) => onSubmit(ev)}>Register</button>

            </form >
        </div >

    )
}