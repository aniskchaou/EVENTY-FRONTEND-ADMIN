import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/message`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/message/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/message`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/message/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/message/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/message`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/message?title=${title}`);
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