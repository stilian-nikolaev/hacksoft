import axios from "axios";
// import { AuthStore } from "../stores/AuthStore";

const API_URL = 'https://hacksoft-eee8a-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
// const { token } = AuthStore;

export const apiClient = axios.create({
    baseURL: API_URL,
    // headers: {
    //     'Authorization': `Bearer ${token}`
    // }
})