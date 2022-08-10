import { useState } from "react";
import { editProfile } from "../../../services/userService";
import styles from "./ProfileEditForm.module.css"

export const ProfileEditForm = ({
    profile,
    setProfile,
    onClose
}) => {

    const [values, setValues] = useState({
        username: profile.username,
        profileImg: profile.profileImg,
        title: profile.title,
        motto: profile.motto,

    })

    const [errors, setErrors] = useState({
        username: false,
        profileImg: false,
        title: false,
        motto: false,

    })

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault()

        for (let key in errors) {
            if (errors[key]) {
                return alert("Not all input fields are valid!");
            }
        }

        for (let key in values) {
            if (!values[key]) {
                return alert("All fields are mandatory");
            }
        }

        let data = Object.fromEntries(new FormData(e.target.parentNode))
        editProfile(profile._id, data).then(result => {setProfile(result)})

        onClose()

    }

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


    return (
        <div className={styles['profile-form']}>
            <div onClick={onClose} className={styles['close-form']} title="Cancel">
                <img src="https://i.ibb.co/0XzFW4q/Delete-Red-X-Button-Transparent.png" alt="" />
            </div>
            <h3>Edit Profile</h3>
            <form>
                <label htmlFor="username">Name</label>
                <input onBlur={(e) => validateLength(e, 8)} onChange={changeHandler} value={values.username} id="username" type="text" name="username" />
                {errors.username && <p>Username must be at least 8 symbols long</p>}

                <label htmlFor="title">Title</label>
                <input onBlur={(e) => validateLength(e, 3)} onChange={changeHandler} value={values.title} id="title" type="text" name="title" />
                {errors.title && <p>Title must be at least 3 symbols long</p>}

                <label htmlFor="motto">Motto</label>
                <input onBlur={(e) => validateLength(e, 10)} onChange={changeHandler} value={values.motto} id="motto" type="text" name="motto" />
                {errors.motto && <p>Motto must be at least 3 symbols long</p>}

                <label htmlFor="profileImg">Profile picture</label>
                <input
                    id="profileImg"
                    type="text"
                    name="profileImg"
                    onChange={changeHandler}
                    value={values.profileImg} />

                <button onClick={onSubmit} className={styles['submit-btn']} >Edit</button>
            </form>

            <div className={styles['img-preview']}>
                <img src={values.profileImg} alt="" />
                <h1>Profile picture preview</h1>

            </div>
        </div>
    )
}