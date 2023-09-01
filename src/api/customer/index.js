import { get } from "../../utils/server";

export const fetchCustomer = async (page, limit) => {
  return await get(`/users?_page=${page}&_limit=${limit}`);
};

export const fetchDetailCustomer = async (id) => {
    return await get(`/users/${id}`);
  };