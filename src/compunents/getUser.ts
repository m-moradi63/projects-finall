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
  language :string  | null,
  allow_forking:boolean,
  node_id:string ,
  default_branch: string ,
  archived :boolean
}







const token = "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"
async function apiRequest(username:string) : Promise<User>{
  const octokit = new Octokit({ auth: token })

  const old = (await octokit.request("GET /users/{username}/", {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  
  console.log("contributes" , old.data)
  return old.data

}
async function apiRepos(username:string): Promise<Array<Repositoryes>> {


  
  const octokit = new Octokit({ auth: token })

  const repo = (await octokit.request("GET /users/{username}/repos/", {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))

  
  /* console.log("repo" , repo.data) */
  return repo.data
  

}
export { apiRequest , apiRepos }
