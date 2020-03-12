const getCodeFrequency = require('../getCodeFrequency');
const config = require('./config');

const { repoName, token } = config;

getCodeFrequency(repoName, token)
  .then((stat) => {
    console.log(stat.data);
  });
