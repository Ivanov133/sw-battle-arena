import { post, put, get } from "./requester"

export const getAllCharacters = () => get('http://localhost:3030/data/characters')

/* export async function getCharacter(id) {
    const response = await fetch(`http://localhost:3030/data/characters/${id}`)
    const result = await response.json()

    return result */
/* } */

export const getCharacter = (id) => get(`http://localhost:3030/data/characters/${id}`)


export const editCharacter = (data, id) => put(`http://localhost:3030/data/characters/${id}`, data)

/* export async function createCharacter(data) {
    const response = await fetch("http://localhost:3030/jsonstore/characters", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}
 */

export const createCharacter = (data) => post(`http://localhost:3030/data/characters`, data)

/* export async function editCharacter(data, id) {
    const response = await fetch(`http://localhost:3030/jsonstore/characters/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
} */