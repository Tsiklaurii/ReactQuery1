import $api from "../http";

export default async function fetchUser(id: string) {
    const res = await $api.get(`/users/${id}`);
    return res.data;
}
