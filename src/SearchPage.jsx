import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import productData from './data/products.json';

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get('query') || '';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      try {
        const data = productData.products;
        console.log('All Products:', data);

        const result = data.filter(product => {
            const searchable = `${product.name} ${product.category} ${product.description || ''} ${product.price}`.toLowerCase();
            return searchable.includes(query.toLowerCase());
          });

        console.log('Filtered:', result);
        setFilteredProducts(result);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-xl font-bold mb-4">
        Search Results for: <span className="text-sky-600">"{query}"</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <Cards key={product.id} products={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
