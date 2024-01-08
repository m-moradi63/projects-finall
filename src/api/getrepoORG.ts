import { Octokit } from "octokit";
import {token} from "../constant.ts"
import { useParams } from "react-router-dom";





export interface Repositspecial{
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  
  
  }
  async function getOrg(name:string , repo:string): Promise<Array<Repositspecial>>{
    
console.log("apiiiiiiiiii" , repo)
const octokit = new Octokit({
    auth: token
  })
  
  const org= (await octokit.request('GET /repos/{owner}/{repo}', {
    owner: name,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }))
  console.log ("re::::::::::" , org.data)
  return org.data
  
}
export {  getOrg }