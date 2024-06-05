import React from 'react';
import '../CSS/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
            <MDBFooter  className='footer text-center text-lg-start'>
              <section className=''>
                <MDBContainer className='text-center text-md-start'>
                  <MDBRow className=''>
                    <MDBCol lg="4" xl="3" >
                      <h3 style={{fontSize: "40px"}} className='text-uppercase fw-bold mb-4'>
                        CleverBooks
                      </h3>
                      <p>
                      Crest is an AI-powered supply chain software that provides <br/>companies tools for demand forecasting, inventory planning and <br/>more. This helps them have the right amount of stock, optimise <br/>space and fulfil every order.
                      </p>
                    </MDBCol>
        
                    <MDBCol lg="2" xl="2" className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Angular
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          React
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Vue
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Laravel
                        </a>
                      </p>
                    </MDBCol>
        
                    <MDBCol lg="2" xl="2" >
                      <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Help
                        </a>
                      </p>
                    </MDBCol>
        
                    <MDBCol lg="3" xl="3" >
                      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                      <p>
                        <MDBIcon icon="home" className="me-2" />
                        New York, NY 10012, US
                      </p>
                      <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        info@example.com
                      </p>
                      <p>
                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                      </p>
                      <p>
                        <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                      </p>
                      <div>
                        <br></br>
                  <a alt='facebook' href='facebook.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href='twitter.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href='google.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href='instagram.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href='linkedin.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href='github.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                  </a>
                </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
        
              <div className=' p-4 mt-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              Copyright 2024 Crest
            Terms of Service
            Privacy Policy<br/>
            Conifer Innovations Private Limited<br/>
            CIN: U72900KA2022PTC163144
              </div>
              <div >
              <a href='#top' style={{color: "white"}}><MDBIcon style={{fontSize: "50px", float: "right"}} far icon="arrow-alt-circle-up" /></a>
              </div>
            </MDBFooter>
    );
  }
  
  export default Footer;