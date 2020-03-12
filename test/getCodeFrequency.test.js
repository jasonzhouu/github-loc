const getCodeFrequency = require('../getCodeFrequency');
const config = require('./config');

const { repoName } = config;

getCodeFrequency(repoName)
  .then((data) => {
    console.log(data);
  });
