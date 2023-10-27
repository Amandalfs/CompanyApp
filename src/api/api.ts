import axios from "axios";

export const api = axios.create({
	baseURL: "https://outros.opea-uat.solutions/prova/front/api",
	timeout: 10000,
	headers: {"Content-Type": "application/json"}
});
