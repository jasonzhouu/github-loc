const { Octokit } = require('@octokit/rest');

const calculateLoc = require('./calculateLoc');

module.exports = async function getCodeFrequency({ repoName, token }) {
  const octokit = new Octokit({
    auth: token,
  });

  const url = `/repos/${repoName}/stats/code_frequency`;

  const { data } = await octokit.request(url);

  let loc;

  try {
    loc = calculateLoc(data);
  } catch (error) {
    console.error(error);
  }

  return loc;
};
