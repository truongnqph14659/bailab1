import axios from "axios"
export const instance = axios.create({
    baseURL: 'http://localhost:3001/pokemons',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})