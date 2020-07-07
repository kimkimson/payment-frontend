import axios from "axios";

const generateApi = (url, method, data, params) => {
  return axios.create({
    baseURL: "http://127.0.0.1:8400",
    url,
    method,
    ...(data && { data }),
    ...(params && { params }),
  });
};

// const createPayment
