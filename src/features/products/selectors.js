export const selectFilteredProducts = state => {
  let products = state.products.all;

  if (state.products.category !== 'all') {
    products = products.filter(p => p.category === state.products.category);
  }

  if (state.products.search) {
    const search = state.products.search.toLowerCase();
    products = products.filter(p => p.title.toLowerCase().includes(search));
  }

  if (state.products.sort === 'price-asc') {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (state.products.sort === 'price-desc') {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  return products;
};
