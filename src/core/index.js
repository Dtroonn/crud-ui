import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://178.128.196.163:3000/api/records/",
});
