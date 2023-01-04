import instance from "./apiClient";

const apiPost = {
  getAll(params) {
    const url = "/posts";
    return instance.get(url, { params });
  },

  find(id) {
    const url = `/posts/${id}`;
    return instance.get(url);
  },

  add(data) {
    const url = `/posts`;
    return instance.post(url, data);
  },

  update(data) {
    const url = `/posts/${data.id}`;
    return instance.patch(url, data);
  },

  remove(id) {
    const url = `/posts/${id}`;
    return instance.delete(url);
  },
};

export default apiPost;
