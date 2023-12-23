import { Octokit } from "octokit";

export interface User{
  Avatar_url : string ,
  name : string | null,
  company: string | null,
  blog:string | null,
  bio: string | null,
  folowers :number ,
  following :number,
  login: string
  


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


async function apiRequest() : Promise<User | null >{


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
