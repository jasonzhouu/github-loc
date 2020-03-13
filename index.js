const getCodeFrequency = require('./getCodeFrequency');

const repoName = process.argv[2];
const token = process.argv[3];
const detail = process.argv[4] === '--detail';

(async function IIFE() {
  const { totalLoc, languageDetailsList } = await getCodeFrequency({
    repoName,
    token,
    detail,
  });
  console.log(`Repository: \t https://github.com/${repoName} \n`
    + `Line of code: \t ${totalLoc}`);
  if (languageDetailsList !== undefined) {
    console.log(languageDetailsList);
  }
}());

module.exports = getCodeFrequency;
