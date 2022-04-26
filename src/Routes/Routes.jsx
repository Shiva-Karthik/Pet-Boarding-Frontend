import {Routes, Route} from "react-router";
import { HomePage } from "../Components/HomePage";
import {Navbar} from "../Components/Navbar";
import { ShowEntity } from "../Components/ShowEntity";


export const AllRoutes = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route exact path="/petcenter/:id" element={<ShowEntity/>}></Route>
            <Route></Route>
        </Routes>
        </>
    )
}