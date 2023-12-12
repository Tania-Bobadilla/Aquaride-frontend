import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes