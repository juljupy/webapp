const axios = require('axios');
const queryString = require('query-string');

module.exports = function (url, data, config) {
    config = config || {};
    config.headers = Object.assign({}, config.headers, {
        'content-type': 'application/x-www-form-urlencoded'
    });

    return axios.post(url, queryString.stringify(data), config);
}