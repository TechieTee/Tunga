import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Determine if the user has scrolled down enough to apply transparency
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}>
      {/* <nav>
        <ul>
      <li> <Link to="/">home</Link></li>
         <li>   <Link to="/about">about</Link></li>
          <li>  <Link to="/playground">playground</Link>  </li>  </ul>
      </nav> */}

      <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/playground">PlayGround</Nav.Link>
      </Nav.Item>
    </Nav>
    </header>


  );
};

export default Header;
