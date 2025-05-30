import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToFavorites = () => {
    dispatch(addFavorite(product));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <article className="relative bg-white border p-4 rounded shadow hover:shadow-md transition-all flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      </Link>
      <h2 className="text-sm font-semibold mt-2 line-clamp-2">{product.title}</h2>
      <p className="text-xs text-gray-600">{product.category}</p>
      <p className="text-lg font-bold">${product.price}</p>

      <button
        onClick={handleAddToFavorites}
        className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add to Favorites
      </button>

      {showMessage && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-3 py-1 rounded shadow">
          Added to favorites
        </div>
      )}
    </article>
  );
}