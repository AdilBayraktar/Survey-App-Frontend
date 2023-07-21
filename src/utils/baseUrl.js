import axios from "axios";

const baseRequest = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://survey-api-jet.vercel.app/api",
});

export default baseRequest;
