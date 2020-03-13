const { Octokit } = require('@octokit/rest');
const getLanguageDetails = require('./getLanguageDetails.js');

const calculateLoc = require('./calculateLoc');

module.exports = async function getCodeFrequency({ repoName, token }) {
  const octokit = new Octokit({
    auth: token,
  });

  const url = `/repos/${repoName}/stats/code_frequency`;

  const { data } = await octokit.request(url);

  const totalLoc = calculateLoc(data);

  const languageDetailsList = await getLanguageDetails(repoName, octokit);

  return {
    totalLoc,
    languageDetailsList,
  };
};
