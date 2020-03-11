import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/project`;
export const getProject = data => getData(url, data);

export const deleteProject = data => {
  const projectId = data;
  return deleteData({ url: `${url}/${projectId}`, projectId });
};

export const updateProject = data => updateData({ url: `${url}`, data });

export const addProject = data => addData({ url: `${url}`, data });
