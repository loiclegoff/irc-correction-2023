import { Card } from 'react-bootstrap';
import { Visual } from '../visual/Visual';

export function Part(props) {
  return (
    <Card key={props.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.part.title}</Card.Title>
        <Visual
          src={props.part.visual_src}
          title={props.part.title}
          type={props.part.visual_type}
        />
      </Card.Body>
    </Card>
  );
}
