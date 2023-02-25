import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"

export default function About(){

  return (
  <>
  <div className='d-flex justify-content-between mx-5 py-3 sticky-top'>
   <div > <h1  className='main_heading'>Cryptoclub</h1></div>  <div > <h1 className='main_heading'></h1></div>
 <div>
<div  className='d-flex align-items-center'> <Link to="/"> <button type="button" class="btn btn-block footer_button  glow-button btn-outline-light  _360_button_styling ">back</button> </Link></div>  
</div>
 </div>

    <Container className='about'>
    <Row>
        <Col className='col-md-6' md={6}>
          <div class="card-container item-1">
            <div class="card-content">
              <h2>Beach Vacation</h2>
              <p>Spend a week on the sunny</p>
            </div>
          </div >

          <div class="card-container item-3">
          <div class="card-content">
            <h2>Beach Vacation</h2>
            <p>Spend a week on the sunny</p>
          </div>
        </div>

        <div class="card-container item-5">
          <div class="card-content">
            <h2>Beach Vacation</h2>
            <p>Spend a week on the sunny</p>
          </div>
        </div>

        </Col>
      <Col className='col-md-6' md={6}>
        <div class="card-container item-2">
          <div class="card-content">
            <h2>Beach Vacation</h2>
            <p>Spend a week on</p>
          </div>
        </div>

        <div class="card-container item-4">
            <div class="card-content">
              <h2>Beach Vacation</h2>
              <p>Spend a week on the sunny</p>
            </div>
          </div >

          <div class="card-container item-6">
          <div class="card-content">
            <h2>Beach Vacation</h2>
            <p>Spend a week on</p>
          </div>
        </div>

        <div class="card-container item-7">
          <div class="card-content">
            <h2>Beach Vacation</h2>
            <p>Spend a week on the sunny</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  </>
  );

};
