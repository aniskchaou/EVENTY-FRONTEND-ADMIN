const _user = [{ "username": "Nathalie David", "email": "NathalieDavid@armyspy.com", "password": "", "contact": "02.08.57.72.09" }]


const getAll = () => {
    return _user;
};

const get = id => {
    return _user.find(item => item.id === id);
};

const create = (data) => {
    _user.push(data);
};

const update = (old, data) => {

    var foundIndex = _user.findIndex(item => item === old);
    _user[foundIndex] = data;
};

const remove = id => {
    _user.splice(id, 1);
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