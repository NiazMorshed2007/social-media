import { http } from "../helpers/http";

export const getOne = (path: string, id = {}) => {
  const url = `${path}/${id}`;
  return http.get(url);
};


export const getAll = (path: string) => {
  const url = path;
  return http.get(url);
};

export const post = (path: string, obj: Object, qParams = {}) => {
  return http.post(path, JSON.stringify(obj));
};
