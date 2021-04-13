const _event = [{
    "category_name": "Culture", "event_name": "La Fête du Citron", "event_description":
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s", "event_start_date": "12/1/2020"
}]

const getAll = () => {
    return _event;
};

const get = id => {
    return _event.find(item => item.id === id);
};

const create = (data) => {
    _event.push(data);
};

const update = (old, data) => {

    var foundIndex = _event.findIndex(item => item === old);
    _event[foundIndex] = data;
};

const remove = id => {
    _event.splice(id, 1);
};

const removeAll = () => {

};

const findByTitle = title => {

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