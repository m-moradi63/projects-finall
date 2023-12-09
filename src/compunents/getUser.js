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

  
  console.log("repo" , repo)
  return repo

}
export { apiRequest , apiRepos }
