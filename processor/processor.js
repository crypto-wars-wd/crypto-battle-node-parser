const { api } = require('api');
const { parseSwitcher } = require('parsers/mainParser');

const START_FROM_CURRENT = process.env.START_FROM_CURRENT === 'true';

const runStream = async () => {
  try {
    const transactionStatus = await api.getBlockNumberStream({
      // # param to start parse data from latest block in blockchain
      // # if set to "false" - parsing started from last_block_num(key in redis)
      startFromCurrent: START_FROM_CURRENT,
      transactionsParserCallback: parseSwitcher,
    });

    if (!transactionStatus) {
      console.log('Data is incorrect or stream is already started!');
    } else {
      console.log('Stream started!');
    }
  } catch (e) {
    console.error(e);
  }
};


module.exports = {
  runStream,
};
