import { http } from "../helpers/http";

export const getOne = (path, id = {}) => {
  const url = `${path}/${id}`;
  return http.get(url);
};
