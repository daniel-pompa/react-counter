import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../src/components/Counter';

describe('Tests on the <Counter /> component', () => {
  const value = 10;

  // Taking a snapshot of how the component is rendered by default
  test('Should match the snapshot', () => {
    const { container } = render(<Counter value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('The initial value of the counter must be ten', () => {
    render(<Counter value={value} />);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('10');
    expect(screen.getByText(10)).toBeTruthy();
  });

  test('The counter should increment by one when the "+" button is clicked', () => {
    render(<Counter value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('The counter should decrement by one when the "-" button is clicked', () => {
    render(<Counter value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'subtract' }));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('The counter value should be ten when the "RESET" button is clicked', () => {
    render(<Counter value={value} />);
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByRole('button', { name: 'reset' }));
    expect(screen.getByText(10)).toBeTruthy();
  });
});
