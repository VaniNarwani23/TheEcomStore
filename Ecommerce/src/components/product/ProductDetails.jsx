import React, { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import productsData from "./products";
import RatingStars from "../common/RatingStars";

const FALLBACK_IMAGE = "https://via.placeholder.com/1000x800?text=Product";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => productsData.find(p => String(p.id) === String(id)),
    [id]
  );

  const [quantity, setQuantity] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  /* -------------------- Guard -------------------- */
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-blue-600 font-semibold">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  /* -------------------- Recently Viewed -------------------- */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    const updated = [product.id, ...stored.filter(i => i !== product.id)].slice(0, 8);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    setRecentlyViewed(updated);
  }, [product.id]);

  const related = useMemo(
    () =>
      productsData.filter(
        p => p.category === product.category && p.id !== product.id
      ),
    [product]
  );

  /* -------------------- Actions -------------------- */
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleCheckout = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  /* -------------------- Quantity -------------------- */
  const updateQty = val => {
    if (val >= 1 && val <= 100) setQuantity(val);
  };

  const image =
    !product.image || product.image.includes("example.com")
      ? FALLBACK_IMAGE
      : product.image;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">

        {/* PRODUCT */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Image */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6">
              <img
                src={image}
                alt={product.name}
                className="w-full h-[450px] object-contain"
                onError={e => (e.target.src = FALLBACK_IMAGE)}
              />
            </div>
            {product.onSale && product.originalPrice && (
              <div className="absolute top-8 left-8 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold">
              {product.category.toUpperCase()}
            </span>

            <h1 className="text-4xl font-black dark:text-white text-gray-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <RatingStars rating={product.rating || 0} />
              <span className="font-semibold dark:text-gray-300 text-gray-700">
                {product.rating || 0} ⭐ ({product.reviews?.toLocaleString() || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-gray-900 dark:text-white">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl line-through text-gray-500 dark:text-gray-400 font-bold">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <p className="text-green-600 dark:text-green-400 font-bold mt-2">
                  💚 Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Product Details</h3>
              <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
            </div>

            {/* Quantity */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <label className="font-bold block mb-3 text-gray-900 dark:text-white">
                Select Quantity
              </label>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg w-fit">
                <button
                  onClick={() => updateQty(quantity - 1)}
                  disabled={quantity === 1}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded font-bold hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={e => updateQty(+e.target.value)}
                  className="w-20 text-center font-bold text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded"
                />
                <button
                  onClick={() => updateQty(quantity + 1)}
                  disabled={quantity >= 100}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded font-bold hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🛒 Add {quantity} to Cart
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💳 Checkout
              </button>
            </div>

            {/* Trust Section */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-1">🚚</div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Free Delivery</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-1">🛡️</div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Secure Payment</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <div className="text-2xl mb-1">↩️</div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">30-Day Returns</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <div className="text-2xl mb-1">⭐</div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Top Rated</p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <>
            <h2 className="text-3xl font-black text-center mb-8 text-gray-900 dark:text-white">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {related.map(r => (
                <Link
                  to={`/products/${r.id}`}
                  key={r.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900 hover:-translate-y-1 transition border border-gray-100 dark:border-gray-700"
                >
                  <img
                    src={r.image || FALLBACK_IMAGE}
                    alt={r.name}
                    className="h-40 w-full object-cover mb-3 rounded-lg"
                  />
                  <p className="font-semibold truncate text-gray-900 dark:text-white">
                    {r.name}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                    ₹{r.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* RECENTLY VIEWED */}
        {recentlyViewed.length > 0 && (
          <>
            <h2 className="text-3xl font-black text-center mb-8 text-gray-900 dark:text-white">
              Recently Viewed
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData
                .filter(p => recentlyViewed.includes(p.id))
                .map(p => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900 transition border border-gray-100 dark:border-gray-700"
                  >
                    <img
                      src={p.image || FALLBACK_IMAGE}
                      alt={p.name}
                      className="h-40 w-full object-cover mb-3 rounded-lg"
                    />
                    <p className="font-semibold truncate text-gray-900 dark:text-white">
                      {p.name}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                      ₹{p.price.toLocaleString()}
                    </p>
                  </Link>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
