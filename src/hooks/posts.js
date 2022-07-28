import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";


export function usePosts() {
    async function fetchPosts() {
        const res = await apiClient.get(endpoints.posts.all().url);
        return res.data;
    }

    return useQuery([endpoints.posts.all().url], fetchPosts);
}