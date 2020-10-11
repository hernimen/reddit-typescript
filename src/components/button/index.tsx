import React from 'react'
import styles from './button.module.css';

interface ButtonProps {
  children?: React.ReactNode,
  onClick?: any;
  dataTest: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, dataTest, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick} data-test={`${dataTest}-button`}>
      {children}
    </button>

  )
}

export default React.memo(Button)
