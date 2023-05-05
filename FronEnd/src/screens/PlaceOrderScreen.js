import React from 'react'
import {Link}from 'react-router-dom'
import { Button,Row,Col,ListGroup,Image,Card } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
export default function PlaceOrderScreen() {
  const cart=useSelector((state)=>state.cart)
  //calculate prices
  const addDecimals=(num)=>{
    return (Math.round(num*100)/100).toFixed(2)
  }
  cart.itemsPrice=addDecimals(cart.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0))
  cart.shippingPrice=addDecimals(cart.itemsPrice>100 ?0: 100)
  cart.taxPrice=addDecimals(Number((0.15*cart.itemsPrice).toFixed(2)))
  cart.totalPrice=addDecimals(Number(cart.itemsPrice)+
    Number(cart.shippingPrice)+
    Number(cart.taxPrice).toFixed(2))
  const placeOrderHandler=()=>{
    console.log('order')
  }

    return (
    <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>shipping</h2>
                    <p>
                        <strong>Adress</strong>
                        {cart.shippingAdress.adress},{cart.shippingAdress.city}{' '},
                        {cart.shippingAdress.postalCode},{' '}
                        {cart.shippingAdress.country}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ?(
                        <Message>YOUR cart is empty</Message>
                    ):(
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item,index)=>(
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                        <Image
                                        src={item.image}
                                        alt={item.name}
                                        fluid
                                         rounded/>


                                        </Col>
                                        <Col>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty}x ${item.price}={item.qty *item.price}
                                        
                                        </Col>
                                        
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </ListGroup.Item>
            </ListGroup>

        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>order summary </h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>{cart.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>shipping</Col>
                            <Col>${cart.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Tax</Col>
                            <Col>${cart.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}
