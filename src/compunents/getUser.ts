import { Octokit } from "octokit";

export interface User{
  Avatar_url : string ,
  name : string | null,
  company: string | null,
  blog:string | null,
  bio: string | null,
  folowers :number ,
  following :number

}
export interface Repository{
  name : string ,
  login: string;
  visibility:string ,
  fork:boolean ,
  forks_url: string | null ,
  description :string | null,
  language :string | null 
  

}


async function apiRequest() : Promise<User>{


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
async function apiRepos(): Promise<Repository> {


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
