const { Octokit } = require('@octokit/rest');
const getLanguageDetails = require('./getLanguageDetails.js');

const calculateLoc = require('./calculateLoc');

module.exports = async function getCodeFrequency({ repoName, token, detail }) {
  const octokit = new Octokit({
    auth: token,
  });

  const url = `/repos/${repoName}/stats/code_frequency`;

  const { data } = await octokit.request(url);

  const result = {};
  result.totalLoc = calculateLoc(data);

  if (detail === true) {
    result.languageDetailsList = await getLanguageDetails(repoName, octokit);
  }

  return result;
};
