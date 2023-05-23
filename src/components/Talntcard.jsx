import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pr from '../images/pr.jpg'


function TlntGrd() {
  return (

    <center>
    <Row xs={1} md={2} lg={3} className="g-4">

      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card style = {{width:"600px" }} >
           <center><Card.Img  variant="top" src={pr} /></center>
            <Card.Body>
              <Card.Title>Savindu Harith</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </center>
  );
}

export default TlntGrd;