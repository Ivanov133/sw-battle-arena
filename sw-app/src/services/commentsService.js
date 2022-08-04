import { post, put, get } from "./requester"


export const getAllCharacterComments = () => get('http://localhost:3030/data/characters-comments')

export const createCharacterComment = (data) => post('http://localhost:3030/data/characters-comments', data)

export const editCharacterComment = (id, data) => put(`http://localhost:3030/data/characters-comments/${id}`, data)



export const getAllBattleComments = () => get('http://localhost:3030/data/battle-comments')

export const createBattleComment = (data) => post('http://localhost:3030/data/battle-comments', data)

export const editBattleComment = (id, data) => put(`http://localhost:3030/data/battle-comments/${id}`, data)