import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';
function ProductComponent() {
    const products = useSelector((state)=>state.allProducts.products);        
  return (
    <Row xs={1} md={4} className="g-4">
      {products
      .map((product) => (
        <Col>
          <Card className='card h-100 border-primary' key={product.id}>
          <Link to={`/produc/${product.id}`} style={{textDecoration:'none'}}>
            <Card.Img variant="top" src={product.image} style={{height:"20rem"}}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className='d-flex'>
                <div>{product.price}</div>
                <div  className='ms-auto text-uppercase'>{product.category}</div>
              </Card.Text>
            </Card.Body>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductComponent