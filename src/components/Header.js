import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
function Header() {
  const categories = useSelector((state)=>state.allCategories.categories);        
  return (

    
    <div>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;