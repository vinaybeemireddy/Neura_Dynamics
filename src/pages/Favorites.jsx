import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favorites/favoritesSlice';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="h-32 mx-auto" />
              <h2 className="text-sm font-medium mt-2">{product.title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
              <button
                onClick={() => dispatch(removeFavorite(product.id))}
                className="mt-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
