// Define all user-related functions - log-in, logout, register

/* async function login(email, password) {
    const response = await post('http://localhost:3030/users/login', { email, password })

    const userData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData))
    return response
}


async function register(email, password) {
    const response = await post('http://localhost:3030/users/register', { email, password })

    const userData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData))
    return response

}


async function logout() {
    get('/users/logout')
    clearUserData()
}


export {
    login,
    logout,
    register
} */



/* export async function onLogin(ev) {
    ev.preventDefault()
    console.log('test')
    const formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })

        })
        if (res.ok != true) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()

        //store user data in session
        const loggetUserData = {
            "email": data.email,
            "id": data._id,
            "token": data.accessToken
        }
        sessionStorage.setItem('userData', JSON.stringify(loggetUserData))
    } catch (error) {
        alert(error.message)
    }

} */