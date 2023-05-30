import { useState } from "react"
import styles from './Button.module.css'

const Button = () => {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return <button 
    onClick={() => setButtonColor(newButtonColor)}
    className={styles.button}
    style={{backgroundColor: buttonColor}}
    >
      Change to {newButtonColor}
    </button>
}

export default Button;