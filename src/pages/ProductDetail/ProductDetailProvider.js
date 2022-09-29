import { Provider } from 'react-redux';
import ProductDetail from './ProductDetail';
import productStore from './redux/productStore';

function ProductDetailProvider() {
  return (
    <Provider store={productStore}>
      <ProductDetail />
    </Provider>
  );
}

export default ProductDetailProvider;
