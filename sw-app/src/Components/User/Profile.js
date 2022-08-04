import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfiles } from "../../services/userService"
import styles from "../User/Profile.module.css"

export const Profile = () => {
    const { userId } = useParams()
    const [profile, setProfile] = useState('')

/*     useEffect(() => {
        getProfiles()
            .then(result => {
                const match = result.find(x => x._ownerId === user._id)
                setProfile(match)

            })
    }) */
    return (
        <div className={styles["profile-container"]}>{/* profile.profileData.username */}</div>
    )


}