import axios from 'axios';

const request = async (resource,  method , body) => {
    const {name, password} = body;
    try {
        const res = await axios[method](`http://localhost:4000${resource}`, {
            name,
            password,
        });
        return res.data;
    } catch (err) { return (err.response.data); }
};

export const apiRequest = async (user, cadaster) => {
    return await request(
        (cadaster ? '/user/cadaster' : '/login'), 'post', user);
};
