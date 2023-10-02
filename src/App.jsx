import React, { useEffect, useState } from 'react';

function App(props) {
  // state is initialized by a props
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);
  const [robots, setRobots] = useState([]);

  const [data, setData] = useState([]);

  const handleChangeTitle = (e) => {
    // this.setState allows us to update the state value
    setTitle(e.target.value);
  };

  const handleOnMouseOver = () => {
    console.log('mouse');
    setCount(count + 1);
  };

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
      <h1 onMouseOver={handleOnMouseOver}>
        this is my first React Component
      </h1>
      <label htmlFor="titleInput">Title</label>
      <input
        type="text"
        id="titleInput"
        onChange={handleChangeTitle}
        value={title}
      />
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <p>{JSON.stringify(robots)}</p>
    </div>
  );
}
export default App;
