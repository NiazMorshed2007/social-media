import {post} from './api';

const urls = {
    signup: "auth/signup",
    login: "auth/login",
}

export const signup = async (obj: any) => {
    return await post(urls.signup, obj)
}

export const login = async (obj: any) => {
    return await post(urls.login, obj)
}