import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export function useProfile(id) {
    async function fetchProfile() {
        const res = await apiClient.get(endpoints.profiles.one(id).url);
        return res.data;
    }

    return useQuery([endpoints.profiles.one(id).url], fetchProfile);
}

export async function useCreateProfile(id, data) {
    const res = await apiClient.patch(endpoints.profiles.one(id).url, data);
    return res.data;
}

export async function useEditProfile(id, data) {
    const res = await apiClient.patch(endpoints.profiles.one(id).url, data);
    return res.data;
}

export function useProfileImageURL(id) {
    async function fetchProfileImage() {
        const res = await apiClient.get(endpoints.profiles.image(id).url);
        return res.data;
    }

    return useQuery([endpoints.profiles.image(id).url], fetchProfileImage);
}