import { post, get } from "./requester"

export const getAllCharacterRatings = () => get(`http://localhost:3030/data/character-rating/`)

export const getCharacterRating = (id) => get(`http://localhost:3030/data/character-rating/${id}`)

export const postCharacterRating = (data) => post(`http://localhost:3030/data/character-rating/`, data)