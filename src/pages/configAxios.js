import axios from "axios";

const BASE_URL = "https://frozen-taiga-18293.herokuapp.com/api/";


export const apiRequest = axios.create({
    baseURL: BASE_URL,
});
export const userapiRequest = axios.create({
  baseURL: USER_URL,
});