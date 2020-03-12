const axios = require('axios');
const calculateLoc = require('./calculateLoc');

module.exports = function getCodeFrequency(repoName, token) {
  const url = `https://api.github.com/repos/${repoName}/stats/code_frequency`;

  let axiosPromise;
  if (token !== undefined) {
    axiosPromise = axios.get(url, {
      // 参考：https://flaviocopes.com/axios-send-authorization-header/
      headers: {
        Authentication: `token ${token}`,
      },
    });
  } else {
    axiosPromise = axios.get(url);
  }

  return axiosPromise.then((stat) => calculateLoc(stat.data))
    .catch((error) => {
      if (error) throw error;
    });
};
