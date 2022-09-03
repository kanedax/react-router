import { jpaxios } from "./jpaxios"

export const handleGetPost = ()=>{
    return jpaxios.get('/posts');
}
export const handleGetComment = ()=>{
    return jpaxios.get('/comments?postId=1');
}