import { Profile } from "./profile";
import { Activity } from "./activity";
import { Route, Routes, useParams } from "react-router-dom";


const params = useParams()
export function Main() {


    return (
        <div className="max-w-[1024px] m-auto  mt-8 ">
            <Routes>


                <Route path=":username" element={<Profile />} />
            </Routes>
            

        </div>
    )
}