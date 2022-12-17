import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const signin = (formdata) => API.post("/user/signin", formdata);
export const signup = (formdata) => API.post("/user/signup", formdata);

// 841376988595-0p980esd8nkta66jg3v2flg528mn8ub9.apps.googleusercontent.com id
// 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 secret
