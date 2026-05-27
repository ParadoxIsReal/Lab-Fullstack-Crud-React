import { Route, Routes } from "react-router-dom"
import { HomePages } from "../pages/Home/HomePage"
import { VSFCursos } from "../pages/VSFCursos"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/VSFCursos" element={<VSFCursos />} />
        </Routes>
    </>
    )
}