import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HiroList from "../components/HeroList";
import { observer } from "mobx-react-lite";

const Heroes = observer(() => {
  return (
    <Row className="form-row-lg-5 p-3">
      <Col className="col-10">
        <HiroList />
      </Col>
    </Row>
  );
});

export default Heroes;
