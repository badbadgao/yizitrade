import TProduct from 'services/models/product';
import bali from 'imgs/bali.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import styled from '@emotion/styled';

import './Product.scss';
interface IProps {
  product: TProduct;
}

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
`;

const ProductItem = (props: IProps): JSX.Element => {
  const { product } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={`${bali}`} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`$${product.price}`}
          </Typography>
          <Typography>Bali: 7-Night with Flights at Bali Garden Beach Resort</Typography>
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
