import axios from "axios";

const generateApi = (url, method, data, params) =>
    axios
        .request({
            url,
            method,
            baseURL: "http://localhost:8400",
            ...(data && { data }),
            ...(params && { params }),
        })
        .then(
            (response) => response,
            (error) => error
        );

export const fetchCheckoutSession = (data) => generateApi("/checkout-session", "POST", data);
