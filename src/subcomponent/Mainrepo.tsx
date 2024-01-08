import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/useprofile.ts";
import { useRepos } from "../hooks/usereposit.ts";
import { getuid } from "process";

export function Mainrepo() {
  const params = useParams();
  console.log("paramsparams", params.Repotab);
  console.log("paramsparams1", params.username);

  const { repoinfo, setrepoinfo, setloadingRepos, loadingRepos } = useRepos(
    params.username!,
    params.Repotab!
  );
  const { Getuser, loading } = useProfile(params.username!);
  console.log("tesssst:::", repoinfo);

  if (loading) {
    return <div className="w-[274px] h-[2rem]   ">Loading</div>;
  }
  if (repoinfo) {
    return (
      <div className="flex mt-[1rem] border-b-2 w-[1024px]">
        <img
          className="mr-[1rem] rounded-full border-2 border-solid border-slate-100 w-[2.2rem] h-[2.2rem] "
          src={Getuser?.avatar_url}
        />

        <div>
          <span className="mr-[2rem]">{repoinfo.name!}</span>
          <span className="border-2 solid w-[3.4rem] h-[2rem] rounded-md ml-[1rem] text-slate-400">
            {repoinfo.visibility!}
          </span>
        </div>
        <div>
          <button className="border-2 border-solid rounded-md">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-eye"
            >
              <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            <div>
           {(repoinfo.watchers_count===0)?null:return <span>{watch}</span>}
            
           </div>
            
          </button>
        </div>
      </div>
    );
  }
}
