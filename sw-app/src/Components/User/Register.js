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
        title: '',
        motto: '',
        profileImg: 'https://i.ibb.co/p380hYQ/1870286df48feb862c26e7437707683d.jpg',
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        repass: false,
        username: false,
        profileImg: false,
        title: false,
        motto: false,

    })

    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validateLength = (e, minLength) => {
        if (values[e.target.name].length < minLength) {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: true,
                })
            )
        } else {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: false,
                })
            )
        }
    }


    function onSubmit(ev) {
        ev.preventDefault()

        const {
            email,
            password,
            repass,
            motto,
            profileImg,
            title,
            username,
        } = Object.fromEntries(new FormData(ev.target.parentNode))

        const profileData = {
            motto,
            profileImg,
            title,
            username,
        }

        if (password !== repass) {
            return alert('Passwords must be the same')
        }


        register(email, password,)
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
                <input onBlur={(e) => validateLength(e, 10)} onChange={changeHandler} value={values.email} type="text" id="email" name="email" placeholder="Enter you email" required />
                {errors.email && <p>Email must be at least 8 symbols long</p>}

                <label htmlFor="username">Username</label>
                <input onChange={changeHandler} onBlur={(e) => validateLength(e, 8)} value={values.username} type="text" id="username" name="username" placeholder="Enter you username" required />
                {errors.username && <p>Username must be at least 8 symbols long</p>}

                <label htmlFor="password">Password</label>
                <input onChange={changeHandler} onBlur={(e) => validateLength(e, 6)} value={values.password} type="password" id="password" name="password" placeholder="Enter password" required />
                {errors.password && <p>Password must be at least 8 symbols long</p>}

                <label htmlFor="repass">Repeat Password</label>
                <input onChange={changeHandler} onBlur={(e) => validateLength(e, 6)} value={values.repass} type="password" id="repass" name="repass" placeholder="Repeat password" required />
                {errors.repass && <p>Password must be at least 8 symbols long</p>}

                <label htmlFor="profileImg">Profile picture URL:</label>
                <input onChange={changeHandler} value={values.profileImg} type="text" id="profileImg" name="profileImg" required />

                <label htmlFor="title">Title</label>
                <input onBlur={(e) => validateLength(e, 3)} onChange={changeHandler} value={values.title} id="title" name="title" placeholder="Think of a title, for example - Grand Master Jedi" required />
                {errors.title && <p>Title must be at least 8 symbols long</p>}


                <label htmlFor="motto">Motto</label>
                <input onBlur={(e) => validateLength(e, 10)} onChange={changeHandler} value={values.motto} type="text" id="motto" name="motto" placeholder="Think of a quote, motto, etc." required />
                {errors.motto && <p>Motto must be at least 8 symbols long</p>}

                <button onClick={(ev) => onSubmit(ev)}>Register</button>

            </form >
            <div className={styles['profile-img-preview']}>
                <img src={values.profileImg} alt="" />
                <h4>Profile image preview</h4>

            </div>
        </div >

    )
}