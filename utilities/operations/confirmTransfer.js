const axios = require('axios');
const config = require('config');

module.exports = async (params) => {
  switch (params.to) {
    case 'crypto-battle':
      try {
        const amount = params.amount.split(' ');
        const payload = {
          senderName: params.from,
          amount: amount[0],
          cryptoType: amount[1],
          memo: params.memo,
        };
        const result = await axios.post(`${config.apiUrl}/replenish-account`, payload);
        return { result: result.data };
      } catch (error) {
        return { error: { message: `ERROR Rest connection ${error.config.url}` } };
      }
  }
};
