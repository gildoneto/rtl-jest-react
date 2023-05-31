import { useState } from "react"
import styles from './Button.module.css'

const Button = () => {

  const [buttonColor, setButtonColor] = useState('darkred');
  const newButtonColor = buttonColor === 'darkred' ? 'black' : 'darkred';

  return <button 
    onClick={() => setButtonColor(newButtonColor)}
    className={styles.button}
    style={{backgroundColor: buttonColor}}
    >
      Change to {newButtonColor}
    </button>
}

export default Button;