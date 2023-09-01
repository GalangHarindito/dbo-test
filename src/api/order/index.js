import { get } from "../../utils/server";

export const fetchOrder = async (page, limit) => {
  return await get(`/orders?_page=${page}&_limit=${limit}`);
};

export const fetchDetailOrder = async (id) => {
    return await get(`/orders/${id}`);
  };