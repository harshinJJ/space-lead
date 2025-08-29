import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const errorHandler = (error) => {
  if (error.response) {
    return {
      result: "failed",
      data: error.response.data || null,
      message: error.response.data?.message || "Something went wrong!",
      status: error.response.status,
    };
  } else if (error.request) {
    return {
      result: "failed",
      data: null,
      message: "No response from server. Please try again.",
      status: null,
    };
  } else {
    return {
      result: "failed",
      data: null,
      message: error.message || "Unexpected error occurred",
      status: null,
    };
  }
};

// Request Interceptor
axios.interceptors.request.use(
  (config) => {
    // const token =
    //   typeof window !== "undefined" ? localStorage.getItem("token") : null;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized, redirecting...");
      }
    }
    return Promise.reject(errorHandler(error));
  }
);

export default axios;
