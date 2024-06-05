import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Header.css'

export default function Header() {
  return(
    <>
      <nav className="navbar" style={{position: 'sticky', top: 0, zIndex: "1000"}}>
        <div className="logo-container">
          <img src="/" alt="CleverBooks" className="logo fs-3 gradient-text" />
        </div>
        <div className="links-container d-flex">
        <div className="dropdown1">
            <button className="dropbtn">Product</button>
            <div className="dropdown-content1">
                <div style={{margin: "30px"}}>
                <a href="/" className="prod-drop" style={{marginLeft: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></a>
                </div>
                <div style={{border: "1px solid grey"}}/>
                    <Container>
                  <Row className='d-flex'>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                    <Col sm={3} style={{margin: "15px"}}>
                      <a href="/" className="prod-drop" style={{marginLeft: "20px"}}>
                        <div style={{marginBottom: "20px"}}><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/><b>Beauty and Personal Care</b></div>
                        <div>Dynamically predict futute demand with unmatched accuracy</div>
                      </a>
                    </Col>
                  </Row>
                </Container>
                </div>
                </div>
                <a href="/" className="nav-link">Price</a>
          <div className="dropdown">
            <button className="dropbtn">Industry</button>
            <div className="dropdown-content">
            <a href="/" className="nav-link"><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/>Beauty and Personal Care</a>
            <a href="/" className="nav-link"><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/>Beauty and Personal Care</a>
            <a href="/" className="nav-link"><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/>Beauty and Personal Care</a>
            <a href="/" className="nav-link"><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/>Beauty and Personal Care</a>
            <a href="/" className="nav-link"><img className='drop-icon' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg' alt='dropdown'/>Beauty and Personal Care</a>
            </div>
          </div>
          <a href="/" className="nav-link">Customer Stories</a>
          <a href="/" className="nav-link">About</a>
          <a href="/" className="nav-link">Blog</a>
        </div>
        <div className="buttons-container">
          <button className="nav-button gradient-text1">Login</button>
          <button className="nav-button gradient-button1">Talk To Us</button>
        </div>
    </nav>
    </>
  );
};