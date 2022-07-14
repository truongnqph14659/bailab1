import { instance } from "./instance";
export const getAll = ()=>{
    return instance.get('/')
}
export const getAllId = (id:number)=>{
    return instance.get(`/${id}`)
}

