import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductItem from 'components/ProductItem';
import { productService } from 'services';
import TProduct from 'services/models/product';

import '../custom.scss';

const App = (): JSX.Element => {
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <div className="App container">
      <Container>
        <Row className="d-flex align-item-center">
          {products?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
