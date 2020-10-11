import React from 'react'
import styles from './button.module.css';

interface ButtonProps {
  children?: React.ReactNode,
  onClick?: any;
  dataTest: string;
  disabled?: boolean;
  styled?: string;
}

const Button = ({ children, onClick, dataTest, disabled, styled }: ButtonProps) => {
  return (
    <button disabled={disabled} className={styled || styles.button} onClick={onClick} data-test={`${dataTest}-button`}>
      {children}
    </button>

  )
}

export default React.memo(Button)
