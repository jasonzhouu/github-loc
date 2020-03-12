const getCodeFrequency = require('../getCodeFrequency');
const config = require('./config');

const { repoName, token } = config;

getCodeFrequency(repoName, token)
  .then((stat) => stat.data)
  .then((data) => {
    console.log(data);
  });
