import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'; // You'll create this
import AboutUs from "./About.jsx";
import NavigationBar from './components/Navbar.jsx';
import Cards from './components/Cards.jsx';
import productData from './data/products.json';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      try {
        const endpoint = productData.products;
        setTimeout(() => {
          setProductList(endpoint);
        }, 1000);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
      <Route path="/about" element={<AboutUs />} />
        <Route
          path="/"
          element={
            <main>
              <section>
                <div className="container">
                  <h1 className='mt-16  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-md animate-fadeIn'>Shop our collection</h1>
                </div>
                <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-8">
                  {productList.map((product) => (
                    <Cards key={product.id} products={product} />
                  ))}
                </div>
              </section>
            </main>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
