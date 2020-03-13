module.exports = async function getLanguageDetails(reponame, octokit) {
  const languagesUrl = `/repos/${reponame}/languages`;

  const { data } = await octokit.request(languagesUrl);
  const languageDetailsList = data;

  return languageDetailsList;
};
