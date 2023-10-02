import { useEffect, useState } from 'react';
import { Part } from './Part';

export function PartList(props) {
  const [allParts, setAllParts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const resp = await fetch(
        'https://www.robots.loiclegoff.com/parts'
      );

      const result = await resp.json();
      setAllParts(result);
    }
    fetchData();
  }, []);

  console.log(allParts);
  return (
    <div>
      {allParts
        .filter((part) => props.parts.includes(part.id))
        .map((part) => (
          <Part key={part.id} part={part} />
        ))}
    </div>
  );
}
