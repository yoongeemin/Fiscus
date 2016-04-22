//import fetch from "isomorphic-fetch";
//fetch.Promise = bluebird;
import axios from "axios";

export const GET = (url) => {
    return axios.get(url, {}, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });
};

export const POST = (url, data = {}) => {
    return axios.post(url, JSON.stringify(data), {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": $("meta[name='csrf']").attr("content"),
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });
};
