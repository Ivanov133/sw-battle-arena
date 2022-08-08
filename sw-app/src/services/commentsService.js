import { post, put, get, del } from "./requester"


export const getAllCharacterComments = () => get('http://localhost:3030/data/characters-comments')

export const getCharacterComment = (id) => get(`http://localhost:3030/data/characters-comments/${id}`)

export const createCharacterComment = (data) => post('http://localhost:3030/data/characters-comments', data)

export const editCharacterComment = (id, data) => put(`http://localhost:3030/data/characters-comments/${id}`, data)

export const deleteCharacterComment = (id) => del(`http://localhost:3030/data/characters-comments/${id}`)


export const getAllBattleComments = () => get('http://localhost:3030/data/battle-comments')

export const getBattleComment = (id) => get(`http://localhost:3030/data/battle-comments/${id}`)

export const createBattleComment = (data) => post('http://localhost:3030/data/battle-comments', data)

export const editBattleComment = (id, data) => put(`http://localhost:3030/data/battle-comments/${id}`, data)

export const deleteBattleComment = (id) => del(`http://localhost:3030/data/battle-comments/${id}`)
