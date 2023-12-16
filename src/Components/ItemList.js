import { Zoom } from "react-awesome-reveal";
import { Col, Row, Card, Button } from "react-bootstrap";





const ItemList = ({ itemsData }) => {
  return (

    <Row>
      

      {itemsData.length >= 1 ? (
        itemsData.map((item) => {

          return (
            <Col key={item.id} sm="12" className="mb-5">
              <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }} >
                <img
                  className="img-item"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price} $Dollar</div>
                  </Card.Title>
                  <Card.Text className="by-2">
                    <div className="item-description">
                      {item.description}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          );
        })
      ) : (
        <h3 className="text-center">There is no Menu Data</h3>
      )}



      



    </Row>
    

  );
};

export default ItemList;
