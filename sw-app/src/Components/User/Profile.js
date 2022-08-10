import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfiles } from "../../services/userService"
import { ProfileEditForm } from "../Forms/ProfileForms/ProfileEditForm"
import styles from "../User/Profile.module.css"

export const Profile = () => {
    const { userId } = useParams()
    const [profile, setProfile] = useState('')
    const [formType, setFormType] = useState(null)


    useEffect(() => {
        getProfiles()
            .then(result => {
                const match = result.find(x => x._ownerId === userId)
                setProfile(match)

            })
    }, [userId])

    function userAction(action) {
        setFormType(action)
    }

    function closeHandler() {
        setFormType(null);
    };

    console.log(profile);

    return (
        <div className={styles["profile-container"]}>
            <div className={styles["img-wrapper"]}>
                <img src={profile.profileImg} alt="" />
            </div>
            <section className={styles["profile-data"]}>
                <h4>{profile.username}</h4>
                <p className={styles["title"]}>Title: {profile.title}</p>
                <p className={styles["motto"]}>"{profile.motto}"</p>
                <button onClick={() => userAction("EditProfile")}>Edit profile</button>

            </section>
            {formType === "EditProfile" && <ProfileEditForm profile={profile} setProfile={setProfile} onClose={closeHandler} />}
        </div>
    )


}