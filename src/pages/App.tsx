import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';

import ProductItem from 'components/ProductItem';
import { productService } from 'services';
import TProduct from 'services/models/product';

import Header from './Header';

const StyledBox = styled(Box)`
  padding: 24px;
`;

const StyledGrid = styled(Grid)`
  max-width: 90%;
  margin: auto;
`;

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const App = (): JSX.Element => {
  const [products, setProducts] = useState<TProduct[]>();

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  });

  if (error) return <div>{error?.message}</div>;

  return (
    <div className="App">
      <Header />
      {loading && <div>Loading</div>}
      {data && (
        <StyledBox>
          <StyledGrid container spacing={2}>
            {products?.map((product, id) => (
              <Grid item xs={12} md={4} lg={3} key={id}>
                <ProductItem product={product} key={product.id} />
              </Grid>
            ))}
          </StyledGrid>
        </StyledBox>
      )}
    </div>
  );
};

export default App;
