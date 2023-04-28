import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Testing in <App />', () => {
  const title = 'React Counter';
  const href = 'https://reactjs.org/';
  const alt = 'React logo';

  // Taking a snapshot of how the component is rendered by default
  test('Should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('HTML <a> must have href="https://reactjs.org/"', () => {
    render(<App />);
    expect(screen.getByRole('link').href).toEqual(href);
  });

  test('HTML <img> must have alt="React logo"', () => {
    render(<App />);
    expect(screen.getByRole('img').alt).toBe(alt);
  });

  test('The title should display the text "React Counter"', () => {
    render(<App />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Should display the title in an <h1>', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
  });
});
