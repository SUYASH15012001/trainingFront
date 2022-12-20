import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log("token", token);
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export const signin = (formdata) => API.post("/user/signin", formdata);
export const signup = (formdata) => API.post("/user/signup", formdata);
export const googleLogIn = (res) => API.post("/user/googleLogIn", res);
// 841376988595-0p980esd8nkta66jg3v2flg528mn8ub9.apps.googleusercontent.com id
// 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 secret

export const createTour = (tourData) => API.post("/tour", tourData);
