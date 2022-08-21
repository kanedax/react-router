import { jpaxios } from "./jpaxios"

export const handleGetPost = ()=>{
    return jpaxios.get('/posts');
}