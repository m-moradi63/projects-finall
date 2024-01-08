import { Octokit } from "octokit";
import {token} from "../constant.ts"



export interface Repositoryes{
    name : string | undefined,
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


  async function getOrg(reposi:Array<Repositoryes>) {
    
  
const octokit = new Octokit({
    auth: token
  })
  
  const org= (await octokit.request('GET /orgs/{org}/repos', {
    org: 'ORG'
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
  }))
  console.log ("repooooooo" , org)
  return org
  
}
export {  getOrg }