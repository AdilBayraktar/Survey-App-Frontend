import axios from "axios";

const baseRequest = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default baseRequest;
