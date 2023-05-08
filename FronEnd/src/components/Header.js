import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import DropDown from './DropDown';
import { NavDropdown } from 'react-bootstrap';
import {logout} from '../actions/userAction'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import './style.css'
export default function Header() {
  const dispatch=useDispatch()
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
   const logoutHandler=()=>{
    dispatch(logout())
  }
    const productList=useSelector((state)=> state.productList)

  const {loading,error,products}=productList

  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      
        <Navbar collapseOnSelect className='col-nav' expand="lg" bg="primary" variant="dark">
        <DropDown/>
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >Hi-TECH</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/cart'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'><Nav.Link><i className='fas fa-user'></i>SignIn</Nav.Link></LinkContainer>
            {userInfo ?(
              <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
              <NavDropdown.Item>
                Profile
              </NavDropdown.Item >
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                LogOut
              </NavDropdown.Item >
            </NavDropdown>
            ):(
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>SignIn
                </Nav.Link>
              </LinkContainer>
            )}
        <InputGroup className="mb-3" style={{width:'260px',justifyContent:'center',display:'flex'}}>
    <Form.Control
      placeholder="SearchProduct"
      aria-label="SearchProduct"
      aria-describedby="basic-addon2"
      value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>

          </Nav>
          
          <Nav>
         <Nav.Link >More deets</Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
