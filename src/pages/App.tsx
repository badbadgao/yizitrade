import React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

import ProductItem from 'components/ProductItem';
import { productService } from 'services';
import TProduct from 'services/models/product';

import '../custom.scss';

const StyledBox = styled(Box)`
  padding: 24px;
`;

const StyledGrid = styled(Grid)`
  max-width: 90%;
  margin: auto;
`;

const App = (): JSX.Element => {
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <div className="App">
      <StyledBox>
        <StyledGrid container spacing={2}>
          {products?.map((product, id) => (
            <Grid item xs={12} md={4} lg={3} key={id}>
              <ProductItem product={product} key={product.id} />
            </Grid>
          ))}
        </StyledGrid>
      </StyledBox>
    </div>
  );
};

export default App;
