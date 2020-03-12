const getCodeFrequency = require('./getCodeFrequency');

const repoUrl = process.argv[2];
const token = process.argv[3];

getCodeFrequency(repoUrl, token)
  .then((loc) => {
    console.log(`Repository: \t https://github.com/${repoUrl} \n`
    + `Line of code: \t ${loc}`);
  });

module.exports = getCodeFrequency;
