import { post } from "../../utils/server";

export const fetchLogin = async (data) => {
  return await post("/auth", data);
};
