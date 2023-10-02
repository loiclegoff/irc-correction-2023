import { useEffect, useState } from 'react';
import { Robot } from './components/robots/Robot';
import { PartList } from './components/parts/PartList';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loadRobots } from './core/actions';
import { selectRobots } from './core/selectors';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const resp = await fetch(
        'https://www.robots.loiclegoff.com/robots'
      );

      const result = await resp.json();
      dispatch(loadRobots(result));
    }
    fetchData();
  }, [dispatch]);

  const storedRobots = useSelector(selectRobots);

  return (
    <div className="App">
      <h1>Robot Factory</h1>
      <Container>
        <Row>
          <Col>
            {storedRobots.map((robot) => (
              <Robot
                key={robot.id}
                id={robot.id}
                title={robot.title}
                visual_src={robot.visual_src}
                visual_type={robot.visual_type}
                parts={robot.parts}
              />
            ))}
          </Col>
          <Col>
            <PartList></PartList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
