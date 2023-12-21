import React, { useState, useEffect } from 'react';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    // Simulamos obtener los productos de una API o base de datos
    const fetchProducts = async () => {
      // Simulación de datos ficticios con 9 productos
      const fakeProducts = [
        { _id: 1, name: 'Producto 1', category: 'Hombre', price: 20, imageURL: 'https://via.placeholder.com/150' },
        { _id: 2, name: 'Producto 2', category: 'Mujer', price: 25, imageURL: 'https://via.placeholder.com/150' },
        { _id: 3, name: 'Producto 3', category: 'Niños', price: 15, imageURL: 'https://via.placeholder.com/150' },
        { _id: 4, name: 'Producto 4', category: 'Surf', price: 30, imageURL: 'https://via.placeholder.com/150' },
        { _id: 5, name: 'Producto 5', category: 'Accesorios', price: 10, imageURL: 'https://via.placeholder.com/150' },
        { _id: 6, name: 'Producto 6', category: 'Hombre', price: 22, imageURL: 'https://via.placeholder.com/150' },
        { _id: 7, name: 'Producto 7', category: 'Mujer', price: 28, imageURL: 'https://via.placeholder.com/150' },
        { _id: 8, name: 'Producto 8', category: 'Niños', price: 18, imageURL: 'https://via.placeholder.com/150' },
        { _id: 9, name: 'Producto 9', category: 'Surf', price: 35, imageURL: 'https://via.placeholder.com/150' },
      ];

      setProducts(fakeProducts);

      // Obtener categorías únicas
      const categories = Array.from(new Set(fakeProducts.map(product => product.category)));
      setUniqueCategories(categories);
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    // Aquí puedes implementar la lógica para agregar un producto al carrito
    console.log(`Producto ${productId} agregado al carrito`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <h2>Categorías</h2>
          <ul className="list-group">
            {uniqueCategories.map((category, index) => (
              <li key={index} className="list-group-item">{category}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <h2>Mujer</h2>
          <div className="row">
            {products.map(product => (
              <div key={product._id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={product.imageURL || 'https://via.placeholder.com/150'} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Precio: ${product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product._id)}>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
