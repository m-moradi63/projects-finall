import { Octokit } from "octokit";
async function apiRequest() {


  const token = "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"
  const octokit = new Octokit({ auth: token })

  const old = (await octokit.request("GET /users/{username}/", {
    username: "m-moradi63",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  console.log(old)
  
  console.log("tmp is:", old)
  return old.data
}
export { apiRequest }
