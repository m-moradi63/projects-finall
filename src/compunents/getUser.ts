import { Octokit } from "octokit";

export interface User{
  avatar_url : string | undefined,
  name : string | null,
  company: string | null,
  blog:string | null,
  bio: string | null,
  followers :number ,
  following :number,
  login: string  ,
  location : string,
  twitter_username : string
  


}
export interface Repositoryes{
  name : string | null | undefined,
  login: string ,
  visibility:string ,
  fork:boolean,
  forks_url: string  ,
  description :string | null | undefined,
  language :string  | null
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

  
  console.log("contributes" , old.data)
  return old.data

}
async function apiRepos(): Promise<Array<Repositoryes>> {


  const token = "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"
  const octokit = new Octokit({ auth: token })

  const repo = (await octokit.request("GET /users/{username}/repos/", {
    username: "shahramardalan",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  
  /* console.log("repo" , repo.data) */
  return repo.data
  

}
export { apiRequest , apiRepos }
