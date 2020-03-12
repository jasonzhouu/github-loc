const getCodeFrequency = require('../getCodeFrequency');
const config = require('./config');

const { repoName, token } = config;

getCodeFrequency(repoName, token)
  .then((data) => {
    console.log(data);
  });
