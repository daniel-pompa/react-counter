import PropTypes from 'prop-types';
import reactLogo from './assets/images/react.svg';
import Counter from './components/Counter';

function App({ title }) {
  const value = 0;

  return (
    <div className='app'>
      <div>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{title}</h1>
      <Counter value={value} />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  title: 'React Counter',
};

export default App;
