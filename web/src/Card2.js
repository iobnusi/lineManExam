import React , { useState, useEffect } from 'react';
import './App.css';
import { Row, Col , Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Card2 = (props) => {

    return (
        <>
        <Row className="mb-md-5">
            <Col xs={6} md={4}>
              <Image rounded style={{ width: '100%', height: '35vw', objectFit: 'cover'}} src={props.images[0]}></Image>
            </Col> 
            <Col xs={6} md={8}>
              <div className='text'>
                <a className = "card-title" href={props.url}>
                  {props.title}
                </a>
                <text className = "description" >
                  {props.desc}
                </text>
                <Container>
                  <text className='links'>หมวด: </text>
                  {props.tags.map(e => (
                    <a className='links' onClick={() => {props.setSearch(e)}}>{e}</a>
                  ))
                  }
                  <div className='bottom-images'>
                  <Row className='h-100 mt-md-3'>
                    <Col xs={12} md={4}>
                      <Image rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={props.images[1]}></Image> 
                    </Col>
                    <Col xs={12} md={4}>
                      <Image rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={props.images[2]}></Image> 
                    </Col>
                    <Col xs={12} md={4}>
                      <Image rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={props.images[3]}></Image> 
                    </Col>
                  </Row>
                  </div> 
                </Container>    
              </div>
            </Col>
        </Row>
        </>

    )
}

export default Card2