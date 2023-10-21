import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../app/pages/HomePage"
import { NotePage } from "../app/pages/NotePage"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/apunte" element={<NotePage/>}/>
    </Routes>
  )
}
