import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/resource`;
export const getResource = data => getData(url, data);

export const deleteResource = data => {
  const resourceId = data;
  return deleteData({ url: `${url}/${resourceId}`, resourceId });
};

export const updateResource = data => updateData({ url: `${url}`, data });

export const addResource = data => {
  const resourceId = data;
  return addData({ url: `${url}/${resourceId}`, resourceId });
};
