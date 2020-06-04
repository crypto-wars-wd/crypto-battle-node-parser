const redis = require('redis');
const bluebird = require('bluebird');
const config = require('config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const postRefsClient = redis.createClient();
const lastBlockClient = redis.createClient();

postRefsClient.select(config.redis.wobjectsRefs);
lastBlockClient.select(config.redis.lastBlock);

module.exports = { postRefsClient, lastBlockClient };
