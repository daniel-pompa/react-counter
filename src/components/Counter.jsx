import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <h2 id='counter'>{counter}</h2>
      <div className='buttons'>
        <button className='btn'>+</button>
        <button className='btn btn-reset'>Reset</button>
        <button className='btn'>-</button>
      </div>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
