import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

useQuery

export function useWorkouts() {
    async function fetchWorkouts() {
        const res = await apiClient.get(endpoints.posts.all().url);
        return res.data;
    }

    return useQuery(endpoints.workouts.all().url, fetchWorkouts);
}