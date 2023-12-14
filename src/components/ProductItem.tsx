import { Product } from '__generated__/graphql';
import bali from 'imgs/bali.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import DiscountIcon from '@mui/icons-material/Discount';
import styled from '@emotion/styled';
import { cartItemsVar } from 'cache';
import { useReactiveVar } from '@apollo/client';

import './Product.scss';
interface IProps {
  product: Product;
}

interface ICurrentPriceProps {
  isOnSale: boolean;
}

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
`;

const StyledOriginalPrice = styled(Box)`
  text-decoration: line-through;
  color: grey;
  font-size: 1.2rem;
  margin-right: 16px;
`;

const StyledCurrentPrice = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOnSale',
})`
  color: ${(props: ICurrentPriceProps) => (props.isOnSale ? 'red' : 'inherit;')};
`;

const StyledSoldQuantity = styled(Box)`
  font-size: 0.8rem;
  position: absolute;
  right: 0;
  top: 8px;
`;

const DiscountLabelIcon = styled(DiscountIcon)`
  position: absolute;
  right: 2px;
  top: 2px;
  color: #f5bf42;
`;

const SellInfoContainer = styled(Typography)`
  position: relative;
` as typeof Typography;

const StyledDesc = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  height: 3rem;
`;

const ProductItem = (props: IProps): JSX.Element => {
  const cartItems = useReactiveVar(cartItemsVar);
  const { originalPrice, currentPrice, soldQty, name, description, id } = props.product;
  const isInCart = !!cartItems.find((cartItem) => cartItem === id);

  const isOnSale = originalPrice != currentPrice;

  return (
    <Card>
      <CardActionArea>
        {isOnSale && <DiscountLabelIcon />}
        <CardMedia component="img" height="140" image={`${bali}`} alt="green iguana" />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {name}
          </Typography>
          <StyledDesc variant="body1" color="text.secondary">
            {description}
          </StyledDesc>
          <SellInfoContainer gutterBottom variant="h5" component="div">
            {isOnSale && <StyledOriginalPrice component="span">{`$${originalPrice}`}</StyledOriginalPrice>}
            <StyledCurrentPrice isOnSale={isOnSale} component="span">{`$${currentPrice}`}</StyledCurrentPrice>
            <StyledSoldQuantity component="span" color="text.secondary">{`${soldQty} SOLD`}</StyledSoldQuantity>
          </SellInfoContainer>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledButton
          size="small"
          color="primary"
          variant="outlined"
          disabled={isInCart}
          onClick={() => {
            cartItemsVar([...cartItemsVar(), id]);
          }}
        >
          Add To Cart
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
