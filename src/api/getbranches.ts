import { Octokit } from "octokit";
import {token} from "../constant.ts"

async function getBranch(owner:string , name:string ){
    
    const octokit = new Octokit({
        auth: token
      })
      
      const brancheApi = await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: 'owner',
        repo: 'name',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log ("bbbbbbbbbbbbbbbbbb" , brancheApi.data)
      return brancheApi.data
      
    }
    export {  getBranch }