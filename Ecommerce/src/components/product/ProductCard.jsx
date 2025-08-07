import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  // Handle cases where product data might be incomplete
  const productImage = product.image || "https://via.placeholder.com/300";
  const productPrice = product.price || 0;
  const originalPrice = product.originalPrice || productPrice;
  const isOnSale = product.onSale && originalPrice > productPrice;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-grow">
        <div className="relative pb-[120%] overflow-hidden">
          <img 
            className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300" 
            src={productImage} 
            alt={product.name} 
            loading="lazy"
          />
          {isOnSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`} className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-indigo-600">
              ₹{productPrice.toLocaleString()}
              {isOnSale && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </span>
            {isOnSale && (
              <span className="text-xs text-red-500">
                {Math.round((1 - productPrice / originalPrice) * 100)}% OFF
              </span>
            )}
          </div>
         <button
  onClick={() => addToCart(product)}
  className="bg-indigo-600 text-white px-4 py-2 rounded"
>
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;