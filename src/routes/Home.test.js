import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/react';
import Home from './Home';

const setup = () => render(<Home />);
const colorButton = (name) => screen.getByRole('button', {name});
const checkbox = () => screen.getByRole('checkbox', )

describe('<Button />', () => {
  test('button has correct initial color', () => {
    // imprimir as roles do container
    // logRoles(setup().container);
    setup();
    expect(colorButton('Change to black')).toHaveStyle({ backgroundColor: 'darkred'});
  });
  test('button has correct initial text', () => {
    setup();
    expect(colorButton('Change to black')).toHaveTextContent(/change to black/i);
  });
  test('button turns black when clicked', () => {
    setup();
    const button = colorButton('Change to black');
    // click button
    fireEvent.click(button);
    expect(button).toHaveStyle({backgroundColor: 'black'})
  });
});

describe('<Checkbox />', () => {
  test('initial conditions', () => { 
    setup();
    
   })
})

