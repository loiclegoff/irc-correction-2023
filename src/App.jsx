import { useEffect, useState } from 'react';
import { Robot } from './components/robots/Robot';
import { PartList } from './components/parts/PartList';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [robots, setRobots] = useState([]);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const resp = await fetch(
        'https://www.robots.loiclegoff.com/robots'
      );

      const result = await resp.json();
      setRobots(result);
    }
    fetchData();
  }, []);

  console.log(parts);

  return (
    <div className="App">
      <h1>Robot Factory</h1>
      <Container>
        <Row>
          <Col>
            {robots.map((robot) => (
              <Robot
                key={robot.id}
                id={robot.id}
                title={robot.title}
                visual_src={robot.visual_src}
                visual_type={robot.visual_type}
                parts={robot.parts}
                onRobotSelected={setParts}
              />
            ))}
          </Col>
          <Col>
            {parts.length > 0 && <PartList parts={parts}></PartList>}
          </Col>
        </Row>
      </Container>

      <p>{JSON.stringify(robots)}</p>
    </div>
  );
}
export default App;
