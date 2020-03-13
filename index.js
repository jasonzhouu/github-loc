const getCodeFrequency = require('./getCodeFrequency');

const ARGUMENT = {
  repoName: '--repo',
  token: '--token',
};

let repoName;
let token;

if (process.argv.includes(ARGUMENT.repoName)) {
  const index = process.argv.indexOf(ARGUMENT.repoName);
  repoName = process.argv[index + 1];
}

if (process.argv.includes(ARGUMENT.token)) {
  const index = process.argv.indexOf(ARGUMENT.token);
  token = process.argv[index + 1];
}

(async function IIFE() {
  const loc = await getCodeFrequency({
    repoName,
    token,
  });
  console.log(`Repository: \t https://github.com/${repoName} \n`
    + `Line of code: \t ${loc}`);
}());
