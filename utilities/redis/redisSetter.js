const { lastBlockClient } = require('utilities/redis/redis');

const setLastBlockNum = async (blockNum, redisKey) => {
  if (blockNum) {
    let key = 'last_block_num';
    if (redisKey) key = redisKey;
    await lastBlockClient.setAsync(key, blockNum);
  }
};

module.exports = {
  setLastBlockNum,
};
