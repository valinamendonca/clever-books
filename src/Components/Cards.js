import Card from 'react-bootstrap/Card';

function Cards({ image, title, context }) {
  return (
    <Card className='text-start' style={{ width: '18rem', backgroundColor:"lightgrey", padding:"20px"}}>
      <Card.Body>
        <img src={image} alt={title} height='80px' className="card-image" style={{marginBottom:"20px"}}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{marginTop:"20px"}}>
          {context}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;