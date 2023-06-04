import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/organiser`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/organiser/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/organiser`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/organiser/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/organiser/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/organiser`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/organiser?title=${title}`);
};

const getCount = () => {
    return http.get(`${BASE_URL}/api/organiser/count`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    getCount
};