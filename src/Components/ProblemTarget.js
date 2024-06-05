import Accordion from 'react-bootstrap/Accordion';
import '../CSS/Target.css'

function ProblemTarget() {
  /*
  const [activeItem, setActiveItem] = useState(null);

    const handleSelect = (eventKey) => {
        setActiveItem(eventKey);
    };
    
    
    const getImageSrc = () => {
      if (activeItem==null)
        return;
      console.log(String(activeItem)==='0');
        switch (String(activeItem)) {
            case '0':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            case '1':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp'; 
            case '2':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            case '3':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            case '4':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            case '5':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            case '6':
                return 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp';
            default:
                return 'defaultImage.jpg';
        }
    };
*/
    
  return (
    <div className='target'>
      <h1 style={{fontWeight:"bold"}}>Things your spreadsheet wishes it could do</h1>
      <div className="d-flex" style={{marginTop: "80px", display:"flex"}}>
        <div style={{marginLeft: "120px", maxWidth: "600px", marginRight: "50px"}} >
          <Accordion  defaultActiveKey="0">
          <Accordion.Item eventKey="0" className='main'>
            <Accordion.Header className='accordion-header'>Accurate Demand Forecasting</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className='main'>
            <Accordion.Header className='accordion-header'>HELIX: Workflow Automation</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className='main'>
            <Accordion.Header className='accordion-header'>Automated Purchase Planning</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className='main'>
            <Accordion.Header className='accordion-header'>Automated Purchase Planning</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className='main'>
            <Accordion.Header className='accordion-header'>HELIX: Workflow Automation</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className='main'>
            <Accordion.Header className='accordion-header'>Accurate Demand Forecasting</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className='main'>
            <Accordion.Header className='accordion-header'>Accurate Demand Forecasting</Accordion.Header>
            <Accordion.Body className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <p className='gradient-text'><br></br>Learn More</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        <div style={{background: "linear-gradient(to bottom right, pink, purple)", padding: "20px", borderRadius: "50px 0px 0px 50px", width: "800px"}} >
          <img  srcSet='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-500.webp'  style={{marginTop: "105px", width: "700px"}} alt='tabs'></img>
        </div>
      </div>
    </div>
  );
}

export default ProblemTarget;