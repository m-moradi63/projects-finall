import { User, apiRequest } from "../compunents/getUser.ts";
import { useEffect, useState } from "react";
import { usertype} from '../compunents/profile.tsx';



export function useProfile(props){
    const [Getuser, setGetuser] = useState<User>();
    const [loading, setloading] = useState(true)
    useEffect(() => {
      apiRequest(props.username).then(function (data) {
        setGetuser(data);
        
    })
    .finally(()=>{
      setloading(false)
    })
  
    },[]);

return{
    Getuser: Getuser,
    loading :loading
}

}