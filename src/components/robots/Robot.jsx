import { Card } from 'react-bootstrap';
import { Visual } from '../visual/Visual';
import { useDispatch } from 'react-redux';
import { selectParts } from '../../core/actions';

export function Robot(props) {
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(selectParts(props.parts));
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
        <Visual
          src={props.visual_src}
          title={props.title}
          type={props.visual_type}
        />
      </Card.Body>
    </Card>
  );
}
