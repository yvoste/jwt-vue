import http from "../http-common";


class TutorialDataService {
  getAll(params) {
    console.log("TutorialDataService li:5" + params);
    return http.get("/tutorials", { params });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials/tit/?title=${title}`);
  }

  getComment(id) {
    return http.get(`/tutorials/comments/?id=${id}`);
  }
}

export default new TutorialDataService();
/*
import http from "../http-common";
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class TutorialDataService {
  getAll() {
    console.log("TutorialDataService li:5");
    return axios.get(API_URL + 'tutorials', { headers: authHeader(), "Content-type": "application/json"});
    //return http.get("/tutorials", { params });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials/tit/?title=${title}`);
  }

  getComment(id) {
    return http.get(`/tutorials/comments/?id=${id}`);
  }
}

export default new TutorialDataService();*/

