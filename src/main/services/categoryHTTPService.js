import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/category`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/category/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/category`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/category/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/category/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/category`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/category?title=${title}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};