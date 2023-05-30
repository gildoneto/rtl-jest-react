import { useState } from "react"

const Button = () => {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return <button 
    onClick={() => setButtonColor(newButtonColor)}
    style={{backgroundColor: buttonColor}}
    >
      Change to {newButtonColor}
    </button>
}

export default Button;