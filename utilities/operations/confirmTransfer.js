const { requests } = require('utilities/request');

module.exports = async (params) => {
  switch (params.to) {
    case 'crypto-battle':
      const payload = {
        name: params.from,
        amount: params.amount,
        memo: params.memo,
      };
      await requests.confirmTransfer({ call: payload });
      break;
  }
};
