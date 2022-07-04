export const getToken = (): string => {
    return JSON.parse(localStorage.getItem('tkn') as string);
}