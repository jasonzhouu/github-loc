const getCodeFrequency = require('../getCodeFrequency');

const repoName = 'bitcoin/bitcoin';

getCodeFrequency({ repoName })
  .then((data) => {
    console.log(data);
  });
