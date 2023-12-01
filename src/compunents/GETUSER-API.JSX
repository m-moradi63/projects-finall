import { Octokit } from "octokit"
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /users/{username}', {
    username: 'm-moradi',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })