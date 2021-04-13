const _sponsor = [{ "sponsor_name": "Youtube", "sponsor_image": "images/youtube.jpg" }]


const getAll = () => {
    return _sponsor;
};

const get = id => {
    return _sponsor.find(item => item.id === id);
};

const create = (data) => {
    _sponsor.push(data);
};

const update = (old, data) => {

    var foundIndex = _sponsor.findIndex(item => item === old);
    _sponsor[foundIndex] = data;
};

const remove = id => {
    _sponsor.splice(id, 1);
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