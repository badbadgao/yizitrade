import TProduct from 'services/models/product';
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

import './Product.scss';
interface IProps {
  product: TProduct;
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

const StyledCurrentPrice = styled(Box)`
  color: ${(props: ICurrentPriceProps) => (props.isOnSale ? 'red' : 'inherit;')};
`;

const DiscountLabelIcon = styled(DiscountIcon)`
  position: absolute;
  right: 2px;
  top: 2px;
  color: #f5bf42;
`;

const ProductItem = (props: IProps): JSX.Element => {
  const { product } = props;

  const isOnSale = product.originalPrice != product.currentPrice;
  return (
    <Card>
      <CardActionArea>
        {isOnSale && <DiscountLabelIcon />}
        <CardMedia component="img" height="140" image={`${bali}`} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {isOnSale && <StyledOriginalPrice component="span">{`$${product.originalPrice}`}</StyledOriginalPrice>}
            <StyledCurrentPrice isOnSale={isOnSale} component="span">{`$${product.currentPrice}`}</StyledCurrentPrice>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bali: 7-Night with Flights at Bali Garden Beach Resort
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledButton
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => {
            console.log('tell me what');
          }}
        >
          Add To Cart
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
