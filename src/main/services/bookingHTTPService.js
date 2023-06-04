import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get(`${BASE_URL}/api/booking`);
};

const get = id => {
    return http.get(`${BASE_URL}/api/booking/${id}`);
};

const create = data => {
    return http.post(`${BASE_URL}/api/booking`, data);
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/api/booking/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/api/booking/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/api/booking`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/api/booking?title=${title}`);
};

const getCount = () => {
    return http.get(`${BASE_URL}/api/booking/count`);
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