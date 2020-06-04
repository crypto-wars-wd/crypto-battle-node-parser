const axiosRequest = require('axios');

module.exports = async ({ url, params, viewRequest }) => {
  try {
    const result = await axiosRequest[viewRequest](url, params);
    return { result: result.data };
  } catch (error) {
    return { error: { message: `ERROR Rest connection ${error.config.url}` } };
  }
};
