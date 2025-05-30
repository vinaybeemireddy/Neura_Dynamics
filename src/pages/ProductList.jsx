import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setSearch, setCategory, setSort } from '../features/products/productsSlice';
import { selectFilteredProducts } from '../features/products/selectors';
import ProductCard from '../components/ProductCard';
import debounce from 'lodash.debounce';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status]);

  const handleSearch = debounce((e) => {
    dispatch(setSearch(e.target.value));
  }, 300);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <input type="text" placeholder="Search" onChange={handleSearch} className="w-full md:w-1/3 px-3 py-2 border rounded p-1" />
        <select className= "px-3 py-2 border rounded" onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's</option>
          <option value="women's clothing">Women's</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
        <select className="px-3 py-2 border rounded" onChange={(e) => dispatch(setSort(e.target.value))}>
          <option value="none">Sort by</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
