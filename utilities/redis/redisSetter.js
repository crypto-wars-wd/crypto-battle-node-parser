const { lastBlockClient } = require('utilities/redis/redis');

const PARSE_ONLY_VOTES = process.env.PARSE_ONLY_VOTES === 'false';

const setLastBlockNum = async (blockNum, redisKey) => {
  if (blockNum) {
    let key = PARSE_ONLY_VOTES ? 'last_vote_block_num' : 'last_block_num';
    if (redisKey) key = redisKey;
    await lastBlockClient.setAsync(key, blockNum);
  }
};

module.exports = {
  setLastBlockNum,
};
