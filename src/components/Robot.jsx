import { Card } from 'react-bootstrap';

export function Robot(props) {
  return (
    <Card key={props.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>ID {props.id}</Card.Text>
        <img
          src={props.visual_src}
          alt={props.title}
          width={'100%'}
        />
      </Card.Body>
    </Card>
  );
}
