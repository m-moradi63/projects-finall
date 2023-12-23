import { useEffect, useState } from "react";
import { apiRequest, apiRepos } from "./getUser.ts";
import { Activity } from "./activity.tsx";
import { Sidebar } from "./Sidebar.tsx";

export function Profile() {
  const [Getuser, setGetuser] = useState({});
  useEffect(() => {
    apiRequest().then(function (data) {
      setGetuser(data);
    })

  }, []);

  return (

    <div className="flex box-border w-[1024px]   " >
      <Sidebar />
      <Activity />
    </div>
  );
}
