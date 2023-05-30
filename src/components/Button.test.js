import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import Button from './Button';

const setup = () => render(<Button />);
const colorButton = (name) => screen.getByRole('button', {name});

describe('<Button />', () => {
  test('button has correct initial color', () => {
    // imprimir as roles do container
    logRoles(setup().container);
    expect(colorButton('Change to blue')).toHaveStyle({ backgroundColor: 'red'});
  });
  test('button has correct initial text', () => {
    setup();
    expect(colorButton('Change to blue')).toHaveTextContent(/change to blue/i);
  });
  test('button turns blue when clicked', () => {
    setup();
    const button = colorButton('Change to blue');
    // click button
    fireEvent.click(button);
    expect(button).toHaveStyle({backgroundColor: 'blue'})
  });
})

