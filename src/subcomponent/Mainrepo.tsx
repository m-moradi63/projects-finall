import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/useprofile";
import { Repositoryes } from "../api/getUser";

export function Mainrepo() {
  const params = useParams();
  console.log("paramsparams", params.Repotab);
  let paramse = params.Repotab;
  const { Getuser, loading, repositState, setrepositState } = useProfile(
    params.username!
  );

  console.log("all", repositState);

  if (loading) {
    return <div className="w-[274px] h-[2rem]   ">Loading</div>;
  }
  if (Getuser) {
    return (
      <>
      <div className="flex mt-[1rem] border-b-2 w-[1024px]">
        <img
          className="mr-[1rem] rounded-full border-2 border-solid border-slate-100 w-[2.2rem] h-[2.2rem] "
          src={Getuser.avatar_url}
        />
          
        <div >
          {repositState.map((item) => {
            if (item.name === params.Repotab) {
              return (
                <div>
                  <span className="mr-[2rem]">{item.name}</span>
                  <span className="border-2 solid w-[3.4rem] h-[2rem] rounded-xl ml-[1rem] text-slate-400">
                    {item.visibility}
                  </span>
                </div>
              );
            }
          })}
        </div>
        
      </div>
      
      </>
      
    
    );
  }
}
