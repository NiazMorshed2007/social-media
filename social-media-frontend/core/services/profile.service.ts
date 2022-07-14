import { getAll } from "./api";

const urls = {
    me: "profile/me"
}

export const getProfile = async () => {
    return await getAll(urls.me);
}