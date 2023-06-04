import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/sponser`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/sponser/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/sponser`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/sponser/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/sponser/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/sponser`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/sponser?title=${title}`);
};

const getCount = () => {
    return http.get(`${BASE_URL}/api/sponser/count`);
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