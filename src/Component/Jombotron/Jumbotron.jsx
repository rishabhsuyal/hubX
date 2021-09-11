import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Graph from '../Graph/Graph';
import IconRow from "../Icon-Row/IconRow";
import "./Jumbotron.css";


function Jumbotron() {
    return (
        <Container className="Jumbotron">
            <Row md={2}>
                <Col> <Graph /> </Col>
                <Col> <IconRow /> </Col>
            </Row>
        </Container>
    )
}

export default Jumbotron;
