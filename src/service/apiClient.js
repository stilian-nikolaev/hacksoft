import axios from "axios";

//usually in a .env file, not stored here
const API_URL = 'https://hacksoft-eee8a-default-rtdb.europe-west1.firebasedatabase.app'

export const apiClient = axios.create({
    baseURL: API_URL,
})