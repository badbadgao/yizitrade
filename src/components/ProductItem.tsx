import { Card, Col, Button } from 'react-bootstrap';
import TProduct from 'services/models/product';
import porkribsImg from 'imgs/porkribs.jpg';

import './Product.scss';
interface IProps {
  product: TProduct;
}

const ProductItem = (props: IProps): JSX.Element => {
  const { product } = props;

  return (
    <Col xs={12} md={4} lg={3} className="d-flex justify-content-center">
      <Card className="product mt-3 mr-2 justify-content-between">
        <Card.Img variant="top" src={`${porkribsImg}`} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column justify-content-start">
            <div className="d-flex">
              <Card.Title>{`$${product.price}`}</Card.Title>
              <Card.Text style={{ marginRight: '8px', marginLeft: '8px' }}>/</Card.Text>
              <Card.Text className="ml-2"> {product.priceUnit}</Card.Text>
            </div>
            <Card.Text className="description mb-2 text-muted">{product.description}</Card.Text>
          </div>
          <Button variant="primary" className="submitBtn w-100">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
