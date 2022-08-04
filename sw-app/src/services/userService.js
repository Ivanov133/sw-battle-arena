import * as request from "./requester";

const baseUrl = 'http://localhost:3030'

export const login = (email, password) => request.post(`${baseUrl}/users/login`, { email, password })

export const register = (email, password, profileData) => request.post(`${baseUrl}/users/register`, { email, password, profileData })

export const logout = async (accessToken) => {
    try {

        const response = await fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })

        return response
    } catch (error) {
        console.log(error);
    }

}
/* 
export const getUserDetails = () => request.get(`${baseUrl}/users/`)
 */
/* export async function getUserDetails(token) {
    console.log(token)
    const response = await fetch(`${baseUrl}/users/me`, {
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            }
        })
    
    const result = await response.json()
    console.log(result);

    return result

} */

export const createProfile = (data) => request.post(`${baseUrl}/data/profiles`, data)

export const getProfiles = () => request.get(`${baseUrl}/data/profiles/`)