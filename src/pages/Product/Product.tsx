import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

export const Product = () => {
  // const { id } = useParams();
  const data = useLoaderData() as Product;

  return (
    <div>
      Product - {data.name}
    </div>
  );
};