import { getOne } from "./api"

const urls = {
    users: "users/"
}

export const getOneUser = async (id: any) => {
    return await getOne(urls.users, id)
}
