import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_PORT}/api/`,
  timeout: 2000
});

export function getData(url, data = {}) {
  return axiosInstance({
    url,
    method: "GET",
    data
  });
}

export function addData(url, data = {}) {
  return axiosInstance({
    url,
    method: "POST",
    data
  });
}

export function updateData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: "PATCH",
    data
  });
}

export function deleteData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: "DELETE",
    data
  });
}
