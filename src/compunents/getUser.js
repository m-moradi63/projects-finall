import { Octokit } from "octokit";
async function apiRequest() {


  const token = "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"
  const octokit = new Octokit({ auth: token })

  const old = (await octokit.request("GET /users/{username}/", {
    username: "shahramardalan",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  
  console.log("data is" , old.data.login)
  return old.data

}
async function apiRepos() {


  const token = "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"
  const octokit = new Octokit({ auth: token })

  const repo = (await octokit.request("GET /users/{username}/repos", {
    username: "shahramardalan",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  
  console.log("repo" , repo.data)
  return repo.data

}
export { apiRequest , apiRepos }
