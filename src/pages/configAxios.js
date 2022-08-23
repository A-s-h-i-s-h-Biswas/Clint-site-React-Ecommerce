import axios from "axios";

const BASE_URL = "https://nextfashions.herokuapp.com/api/";
const USER_URL = "https://nextfashions.herokuapp.com/api/auth";

export const apiRequest = axios.create({
    baseURL: BASE_URL,
});
export const userapiRequest = axios.create({
  baseURL: USER_URL,
});