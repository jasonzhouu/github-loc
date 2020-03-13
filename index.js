const getCodeFrequency = require('./getCodeFrequency');

const repoName = process.argv[2];
const token = process.argv[3];

(async function IIFE() {
  const loc = await getCodeFrequency({ repoName, token });
  console.log(`Repository: \t https://github.com/${repoName} \n`
    + `Line of code: \t ${loc}`);
}());

module.exports = getCodeFrequency;
