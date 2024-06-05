import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import '../CSS/Metrices.css'


function Metrices(){
    return(
        <Container fluid className="metrices">
        <Row >
          <Col sm={2} className="p-0" style={{marginTop:"10%", zIndex: "2"}}>
            <Navbar expand="lg" className="flex-column vh-100 overflow-auto" id="navbar-example2">
              <Nav className="flex-column">
              <div className="App" style={{direction: 'rtl', height: "200px", overflowY: 'scroll'}}>
              <div style={{direction: 'ltr'}}>
                {/*<img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt='scroll'/>*/}
                <Nav.Link href="#section1" style={{color: "white"}} className="gradient-border">STOCKOUTS</Nav.Link>
                <Nav.Link href="#section2" style={{color: "white"}} className="gradient-border">CASH RECOVERY CYCLE</Nav.Link>
                <Nav.Link href="#section3" style={{color: "white"}}className="gradient-border">REVENUE</Nav.Link>
                </div></div>
              </Nav>
            </Navbar>
          </Col>
          <Col style={{color:"white"}} sm={10} className="scrollspy-example" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0">
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <VisibilitySensor>
              {({ isVisible }) => (
                  isVisible ? <h1 id="section1"><CountUp   start={0} end={85} duration={2.75} className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>: <h1><CountUp start={0} end={85} duration={2.75} className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>
                )}
            </VisibilitySensor>
            <p className="fs-1">Reduction in out-of-stock</p>
          </div>
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <VisibilitySensor>
          {({ isVisible }) => (
              isVisible ? <h1><CountUp id="section2" start={0} end={25} duration={2.75}  className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>: <h1><CountUp start={0} end={25} duration={5}  className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>
            )}
            </VisibilitySensor>
              <p className="fs-1">Reduction in Cash Recovery</p>
            </div>
            <div  style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <VisibilitySensor>
          {({ isVisible }) => (
              isVisible ? <h1><CountUp id="section3" start={0} end={15} duration={2.75}  className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>: <h1><CountUp start={0} end={15} duration={8}  className="gradient-text fw-bold" style={{fontSize: "120px"}}/>%</h1>
            )}
            </VisibilitySensor>
              <p className="fs-1">Growth in Revenue</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Metrices;