
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
      <Link to={`/products/₹{product.id}`}>
        <div className="relative pb-[120%] overflow-hidden">
          <img 
            className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300" 
            src={product.image} 
            alt={product.name} 
          />
          {product.onSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/products/₹{product.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600">
            ₹{product.price}
            {product.onSale && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </span>
          <button onClick={() => addToCart(product)}  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
