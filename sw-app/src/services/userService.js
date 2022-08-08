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

export const createProfile = (data) => request.post(`${baseUrl}/data/profiles`, data)

export const getProfiles = () => request.get(`${baseUrl}/data/profiles/`)

export const getProfileById = (id) => request.get(`${baseUrl}/data/profiles/${id}`)

