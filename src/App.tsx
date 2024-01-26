
import { Main } from "./compunents/Main.tsx";


export interface usertype {
  username: string;
}

export function App(username: string) {
  return (
    <div className=" apple-system BlinkMacSystemFont ">
   
      <Main username={username} />
      
    </div>

  );
}
