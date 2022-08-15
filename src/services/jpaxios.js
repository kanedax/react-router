import axios from "axios";

export const jpaxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        
    }
})