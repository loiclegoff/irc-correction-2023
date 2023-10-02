import { useEffect } from 'react';
import { Part } from './Part';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedParts } from '../../core/selectors';
import { loadParts } from '../../core/actions';

export function PartList() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const resp = await fetch(
        'https://www.robots.loiclegoff.com/parts'
      );

      const result = await resp.json();
      dispatch(loadParts(result));
    }
    fetchData();
  }, [dispatch]);

  const storedParts = useSelector(selectSelectedParts);
  console.log(storedParts);

  return (
    <div>
      {storedParts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}
