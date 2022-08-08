import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import { logout } from "../../services/userService"

export const Logout = () => {
    const { userLogout, user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogout()
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                navigate('/')
            })
    })

    return null
}