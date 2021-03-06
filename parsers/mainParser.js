const { transfersParser } = require('parsers');

const parseSwitcher = async (transactions) => {
  for (const transaction of transactions) {
    if (transaction && transaction.operations && transaction.operations[0]) {
      for (const operation of transaction.operations) {
        switch (operation[0]) {
          case 'transfer':
            await transfersParser(operation[1]);
            break;
        }
      }
    }
  }
};

module.exports = {
  parseSwitcher,
};
