import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/authContext"

export const Home = () => {
    const { user } = useContext(AuthContext)
    
/*     useEffect(() => {
        getUserDetails()
            .then(result => {
                console.log(result)
            })
    }) */
            
    return (
        <button>CLICK</button>
    )
}