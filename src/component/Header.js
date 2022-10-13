import React from 'react'
import { Button, Container, FormControl, Navbar, Dropdown, Nav, Badge } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const { state: { cart }, dispatch, filterDispatch } = CartState();

  return (
    <Navbar bg='dark' variant='dark' style ={{height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            Shopping Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl 
            style={{ width: 500 }}
            placeholder="Search a Product"
            className='m-auto'
            onChange={(e) => {
              filterDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              })
            }
            }
          />
        </Navbar.Text>
        <Nav>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px"></FaShoppingCart>
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length > 0 ?(
              cart.map(prod => (
                <span className='cartitem' key={prod.id}>
                  <img 
                    src={prod.image}
                    className="cartItemImg"
                    alt={prod.name} />
                  <div className='cartItemDetail'>
                    <span>{prod.name}</span>
                    <span>$ {prod.price}</span>
                  </div>  
                  <AiFillDelete
                    fontSize="20px"
                    style={{cursor: 'pointer'}}
                    onClick = {() => 
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: prod,
                      })
                    }
                  />
                </span>
              ))
            ):(
              <span style={{ padding: 10 }}> Cart is Empty! </span>
            )}
            <Link to="/cart">
              <Button style={{width: '95%', margin: '0 10px'}}>
                Go To Cart
              </Button>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        </Nav>
      </Container>
    </Navbar>  
  )
}

export default Header