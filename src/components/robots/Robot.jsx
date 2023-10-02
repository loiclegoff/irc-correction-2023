import { Card } from 'react-bootstrap';
import { Image } from './Image';
import { Video } from './Video';

export function Robot(props) {
  function handleOnClick() {
    props.onRobotSelected(props.parts);
  }

  return (
    <Card
      key={props.id}
      style={{ width: '18rem' }}
      onClick={handleOnClick}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>ID {props.id}</Card.Text>
        {props.visual_type === 'video' ? (
          <Video src={props.visual_src} />
        ) : (
          <Image src={props.visual_src} title={props.title} />
        )}
      </Card.Body>
    </Card>
  );
}
