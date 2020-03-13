const getCodeFrequency = require('../getCodeFrequency');

const repoName = 'jasonzhouu/test';

getCodeFrequency({ repoName })
  .then((data) => {
    console.log(data);
  });
