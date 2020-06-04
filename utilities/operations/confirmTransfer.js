const axios = require('axios');
const config = require('config');

module.exports = async (params) => {
  switch (params.to) {
    case 'crypto-battle':
      try {
        const payload = {
          name: params.from,
          amount: params.amount,
          memo: params.memo,
        };
        const result = await axios.post(`${config.apiUrl}/confirm-transfer`, payload);
        return { result: result.data };
      } catch (error) {
        return { error: { message: `ERROR Rest connection ${error.config.url}` } };
      }
  }
};
