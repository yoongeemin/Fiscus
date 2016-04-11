//import fetch from "isomorphic-fetch";
//fetch.Promise = bluebird;
import axios from "axios";

export const GET = (url) => {
    //return fetch(url, {
    //    method: "GET",
    //    headers: {
    //        "Content-Type": "application/json",
    //    },
    //});
    return axios.get(url, {}, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });
};

export const POST = (url, data = {}) => {
    //return fetch(url, {
    //    method: "POST",
    //    headers: {
    //        "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(data),
    //});
    return axios.post(url, JSON.stringify(data), {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
        },
        xsrfCookieName: $("meta[name='csrf']").attr("content"),
        withCredentials: true,
    });
};
