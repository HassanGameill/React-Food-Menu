import { Flip, Slide } from "react-awesome-reveal";
import { Button, Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCategory }) => {
  // To Filter By Category //
  const onFilter = (cat) => {
    filterByCategory(cat);
  };





  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">

          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <div className="d-flex flex-wrap" key={cat.category}>
                  <button onClick={() => onFilter(cat)} className="btn-f mx-2">
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4>There No Data</h4>
          )}

      </Col>
    </Row>
  );
};

export default Category;
