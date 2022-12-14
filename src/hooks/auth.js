import { endpoints } from "../service/apiEndpoints";
import axios from "axios";

export async function useLoginUser(data) {
    const res = await axios.post(endpoints.auth.login().url, data);
    return res.data;
}

export async function useRegisterUser(data) {
    const res = await axios.post(endpoints.auth.register().url, data);
    return res.data;
}