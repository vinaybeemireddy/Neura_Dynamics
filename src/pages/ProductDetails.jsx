import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/favorites/favoritesSlice';
// import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={product.image} alt={product.title} className="h-60 mx-auto flex flex-col md:flex-row items-center gap-6" />
      <h1 className="text-lg font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.category}</p>
      <p className="mt-2 text-sm">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      
      <button
        onClick={() => dispatch(addFavorite(product))}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        
        
      >Add to Favorites
      </button>
    </div>
  );
}
