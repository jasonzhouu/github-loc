const { Octokit } = require('@octokit/rest');
const calculateLoc = require('./calculateLoc');

module.exports = async function getCodeFrequency({ repoName, token }) {
  const octokit = new Octokit({
    auth: token,
  });

  const url = `/repos/${repoName}/stats/code_frequency`;

  let loc;

  try {
    const stat = await octokit.request(url);
    loc = calculateLoc(stat.data);
  } catch (error) {
    loc = 0;
  }

  return loc;
};
