import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded p-4 shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
      <p className="text-xs text-gray-600">{product.category}</p>
      <p className="text-lg font-bold">${product.price}</p>

      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      </Link>
      <button
        onClick={() => dispatch(addFavorite(product))}
        className="mt-2 px-2 py-1 bg-blue-500 text-white rounded"
      >
        Add to Favorites
      </button>
    </div>
  );
}
