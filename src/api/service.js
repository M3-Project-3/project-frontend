// src/api/service.js

import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api"
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

const uploadPictures = (file) => {
  return service
    .post("/upload", file)
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
