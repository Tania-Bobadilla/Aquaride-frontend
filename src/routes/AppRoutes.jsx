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
import Contacto from "../pages/Contacto"
import Hombre from "../pages/Hombre"
import Mujer from "../pages/Mujer"
import Accesorios from "../pages/Accesorios"
import Surf from "../pages/Surf"
import Niños from "../pages/Niños"


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/hombre/:id" element={<ProductItem />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/hombre" element={<Hombre />} />
                    <Route path="/mujer" element={<Mujer />} />
                    <Route path="/surf" element={<Surf />} />
                    <Route path="/accesorios" element={<Accesorios />} />
                    <Route path="/niños" element={<Niños />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes