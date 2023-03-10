import axios from 'axios';

const baseUrl = '/api/form/';

const sendFormData = newObject => axios.post(baseUrl, newObject);

export {
    sendFormData
};
