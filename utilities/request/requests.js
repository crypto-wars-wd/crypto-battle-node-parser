const config = require('config');
const { axiosRequest } = require('utilities/request');

exports.confirmTransfer = async ({ call }) => axiosRequest({ url: `${config.apiUrl}/confirm-transfer`, call, viewRequest: 'post' });
