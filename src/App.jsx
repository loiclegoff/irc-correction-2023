import { useEffect, useState } from 'react';
import { Robot } from './components/Robot';

function App() {
  const [robots, setRobots] = useState([]);

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

  return (
    <div className="App">
      <h1>Robot Factory</h1>
      {robots.map((robot) => (
        <Robot
          key={robot.id}
          id={robot.id}
          title={robot.title}
          visual_src={robot.visual_src}
        />
      ))}
      <p>{JSON.stringify(robots)}</p>
    </div>
  );
}
export default App;
