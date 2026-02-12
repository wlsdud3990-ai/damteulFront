import axios from "axios";

const api = axios.create({
  baseURL: "https://web-damteulfront-mlj2xqaqd3367eb0.sel3.cloudtype.app",
  timeout: 10000, // 10초
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
