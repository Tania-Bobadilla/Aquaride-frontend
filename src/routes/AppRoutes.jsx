import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:productID" element={<ProductItem />} />
                    <Route path="/checkout" element={<Checkout />} /> */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes