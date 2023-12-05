import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';

import ProductItem from 'components/ProductItem';
import { GetAllProductsQuery } from '__generated__/graphql';

const StyledBox = styled(Box)`
  padding: 24px;
`;

const StyledGrid = styled(Grid)`
  max-width: 90%;
  margin: auto;
`;

const GET_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      description
      currentPrice
      originalPrice
      priceUnit
      soldQty
      special
      discountOff
      qualityInStock
    }
  }
`;

const Products = (): JSX.Element => {
  const { loading, error, data } = useQuery<GetAllProductsQuery>(GET_PRODUCTS);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <StyledBox>
      <StyledGrid container spacing={2}>
        {data?.products?.map((product) => (
          <Grid item xs={12} md={4} lg={3} key={product.id}>
            <ProductItem product={product} key={product.id} />
          </Grid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
};

export default Products;
