import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { VSFCursos } from "../pages/VSFCursos"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/VSFCursos" element={<VSFCursos />} />
        </Routes>
    </>
    )
}