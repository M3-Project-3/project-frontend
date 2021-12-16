// src/api/service.js

import axios from "axios";
const API_URL =  process.env.REACT_APP_API_URI;


const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: `${API_URL}/`
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = err => {
  throw err;
};

const getPictures = () => {
  return service
    .get("/businesses")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadPictures = (imageUploadForm) => {
  return service
    .post("/upload", imageUploadForm)
    .then(res => res.data)
    .catch(errorHandler);
};

const createPictures = (newMovie) => {
  return service
    .post("/businesses", newMovie)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
  service,
  getPictures,
  uploadPictures,
  createPictures
};
