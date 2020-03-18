import axios from 'axios';
const axiosInstance = axios.create({
  timeout: 20000,
});

export function getData(url, data = {}) {
  return axiosInstance({
    url,
    method: 'GET',
    data,
  });
}

export function addData(url, data = {}) {
  return axiosInstance({
    url,
    method: 'POST',
    data,
  });
}

export function updateData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: 'PUT',
    data,
  });
}

export function deleteData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: 'DELETE',
    data,
  });
}
