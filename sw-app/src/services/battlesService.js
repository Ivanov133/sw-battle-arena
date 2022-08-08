import { post, get, del } from "./requester"

export const getAllBattles = () => get('http://localhost:3030/data/battles')

export const getBattle = (id) => get(`http://localhost:3030/data/battles/${id}`)

export const deleteBattle = (id) => del(`http://localhost:3030/data/battles/${id}`)

export const createBattle = (data) => post(`http://localhost:3030/data/battles`, data)