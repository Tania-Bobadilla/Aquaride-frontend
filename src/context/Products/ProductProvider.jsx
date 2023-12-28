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
    const getProducts = async() => {
        const response = await axiosClient.get("/ropa_de_hombre")
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

    // Obtener producto por ID
    const getProductById = async(id) => {
        try {
            const response = await axiosClient.get(`/ropa_de_hombre/${id}`);
            const productInfo = response.data.menClothes;
            console.log(productInfo)
            dispatch({
                type: "GET_PRODUCT",
                payload: productInfo 
            })
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <ProductContext.Provider value={{
            getProducts,
            getProductById,
            products: productState.products,
            product: productState.product
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider