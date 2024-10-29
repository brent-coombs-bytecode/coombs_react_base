// getListItems.js
import { products } from './constants';

const getListItems = () => {
  return products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ));
};

export default getListItems;
