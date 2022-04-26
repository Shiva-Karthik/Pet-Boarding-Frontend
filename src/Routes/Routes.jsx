import {Routes, Route} from "react-router";
import {Navbar} from "../Components/Navbar";

export const AllRoutes = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
        </>
    )
}