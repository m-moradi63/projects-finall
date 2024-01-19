import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import { getBranch } from "../api/getbranches.ts";


export function useBranches(owner:string , name:string  ) {
 
  const [loadingBranch, setloadingBranch] = useState(true);
  const [branch , setbranch] = useState([]);

  useEffect(() => {
    getBranch(owner , name)
      .then(function (data) {
        console.log("1111111111111" , data)
        setbranch(data);
        
      })
      .finally(() => {
        setloadingBranch(false);
      });
  }, []);
 
  return {
    loadingBranch:loadingBranch,
    setloadingBranch: setloadingBranch,
    setbranch : setbranch,
    branch:branch
  };
}
