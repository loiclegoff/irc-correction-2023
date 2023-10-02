import { Card } from 'react-bootstrap';

export function Part(props) {
  return (
    <Card key={props.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.part.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
