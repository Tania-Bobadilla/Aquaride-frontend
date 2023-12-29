import ProductContext from './ProductContext';
import productReducer from './productReducer';

import axiosClient from '../../config/axiosClient'
import { useReducer } from 'react';

const ProductProvider = ({ children }) => {
    // Estado inicial
    const initialState = {
        products: [],
        product: [{
            id: "",
            name: "",
            sku: "",
            price: 0,
            image: "",
            stock: ""
        }]
    }

    // Reducer
    const [productState, dispatch] = useReducer(productReducer, initialState)

    // Obtener productos hombre
    const getProductshombre = async() => {
        const response = await axiosClient.get("/ropa_de_hombre")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

    // Obtener productos mujer

    const getProductsmujer = async() => {
        const response = await axiosClient.get("/ropa_de_mujer")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

     // Obtener productos niños

     const getProductsniños = async() => {
        const response = await axiosClient.get("ropa_de_ninos")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

      // Obtener productos accesorios

      const getProductsaccesorios = async() => {
        const response = await axiosClient.get("/accesorios")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

     // Obtener productos surf

     const getProductssurf = async() => {
        const response = await axiosClient.get("/tablas_de_surf")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }


    return (
        <ProductContext.Provider value={{
            getProductshombre,
            getProductsmujer,
            getProductsniños,
            getProductsaccesorios,
            getProductssurf,
            products: productState.products,
            product: productState.product
        }}>
            {children}
        </ProductContext.Provider>
    )

    













}

export default ProductProvider