const { lastBlockClient } = require('utilities/redis/redis');

const getLastBlockNum = async (key = 'last_block_num') => {
  const num = await lastBlockClient.getAsync(key);

  return num ? parseInt(num, 10) : process.env.START_FROM_BLOCK || 29937113;
};

module.exports = { getLastBlockNum };
