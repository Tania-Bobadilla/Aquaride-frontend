import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"

import Auth from "../pages/Auth"
import Profile from "../pages/Profile"

import ProductList from "../pages/ProductList"
import ProductItem from "../pages/ProductItem"
import Checkout from "../pages/Checkout"
import Cart from "../pages/Cart"
import Testing from "../pages/Testing"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Testing />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products/:category" element={<ProductList />} />
                    <Route path="/products/:category/:productID" element={<ProductItem />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/ErrorPage" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes