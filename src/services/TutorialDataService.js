import http from "../http-common";


class TutorialDataService {
  getAll(params) {
    //console.log("TutorialDataService li:5" + params);
    return http.get("/tutorials", { params });
  }

  get(id) {
    console.log("TutorialDataService li:11___id___" + id);
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
    console.log("TutorialDataService li:32___title___" + title);
    return http.get(`/tutorials/tit/?title=${title}`);
  }

  getComment(id) {
    return http.get(`/tutorials/comments/?id=${id}`);
  }
}

export default new TutorialDataService();
