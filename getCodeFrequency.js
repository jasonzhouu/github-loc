const axios = require('axios');

module.exports = function getCodeFrequency(repoName, token) {
  const url = `https://api.github.com/repos/${repoName}/stats/code_frequency`;

  return axios.get(url, {
    // 参考：https://flaviocopes.com/axios-send-authorization-header/
    headers: {
      Authentication: `token ${token}`,
    },
  }).then((stat) => stat.data);
};
