import { post, put, get, del } from "./requester"

export const getAllCharacters = () => get('http://localhost:3030/data/characters')

export const getCharacter = (id) => get(`http://localhost:3030/data/characters/${id}`)

export const deleteCharacter = (id) => del(`http://localhost:3030/data/characters/${id}`)

export const editCharacter = (data, id) => put(`http://localhost:3030/data/characters/${id}`, data)

export const createCharacter = (data) => post(`http://localhost:3030/data/characters`, data)
