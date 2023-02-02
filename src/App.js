import React, { useState } from 'react';

const Product = ({ name, image, price, description }) => {
  return (
    <div style={styles.productContainer}>
      <img src={image} alt={name} style={styles.productImage} />
      <h2 style={styles.productName}>{name}</h2>
      <p style={styles.productPrice}>${price}</p>
      <p style={styles.productDescription}>{description}</p>
      <button style={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState([
    {
      name: 'Product 1',
      image: 'https://via.placeholder.com/150x150',
      price: 9.99,
      description: 'A great product',
    },
    {
      name: 'Product 2',
      image: 'https://via.placeholder.com/150x150',
      price: 19.99,
      description: 'Another great product',
    },
    {
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150',
      price: 29.99,
      description: 'The best product',
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Shopping App</h1>
      <div style={styles.productList}>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    marginBottom: 20,
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productContainer: {
    width: 300,
    height: 400,
    margin: 20,
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: 5,
    overflow: 'hidden',
    boxShadow: '0 0 10px #ccc',
  },
  productImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  productName: {
    fontSize: 24,
    margin: 20,
  },
  productPrice: {
    fontSize: 18,
    margin: 20,
    color: '#555',
  },
  productDescription: {
    fontSize: 16,
    margin: 20,
    color: '#888',
  },
  addToCartButton: {
    backgroundcolor: 'white',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    marginTop: 20,
  },
};

export default App;
