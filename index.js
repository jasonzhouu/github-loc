const getCodeFrequency = require('./getCodeFrequency');

const ARGUMENT = {
  detail: '--detail',
  token: '--token',
};

const repoName = process.argv[2];
let token;
let detail;

if (process.argv.includes(ARGUMENT.detail)) {
  detail = true;
} else {
  detail = false;
}

if (process.argv.includes(ARGUMENT.token)) {
  const index = process.argv.indexOf(ARGUMENT.token);
  token = process.argv[index + 1];
}

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
