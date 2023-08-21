import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/user`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/user/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/user`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/user/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/user/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/user`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/user?title=${title}`);
};

const login = data => {
    return http.post(`${BASE_URL}/api/user/login`, data);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    login
};