import { getOne } from "./api";
const urls = {
  getUserDetails: "users",
};

export async function getProfile(id) {
  return await getOne(urls.getUserDetails + "/" + id);
}
