import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  // Function to increment the counter by one
  const handleAdd = () => setCounter(counter + 1);

  // Function to decrement the counter by one
  const handleSubtract = () => setCounter(counter - 1);

  // Function to reset the counter to zero
  const handleReset = () => setCounter(value);

  return (
    <>
      <h2 id='counter'>{counter}</h2>
      <div className='buttons'>
        <button aria-label='add' onClick={handleAdd} className='btn'>
          +
        </button>
        <button
          aria-label='reset'
          onClick={handleReset}
          className='btn btn-reset'
        >
          Reset
        </button>
        <button aria-label='subtract' onClick={handleSubtract} className='btn'>
          -
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
