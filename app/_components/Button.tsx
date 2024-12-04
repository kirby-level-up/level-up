import styles from '@/_styles/module/Button.module.scss';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  color?: 'darkgrey' | 'yellow' | 'green' | 'red';
  full?: boolean;
  size?: 'small' | 'normal' | 'large' | 'xlarge' | 'xlarge2';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  type,
  text,
  color = 'darkgrey',
  size = 'normal',
  full = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClass =
    `${styles.button} ${styles[color]} ${styles[size]} ${disabled ? styles.disabled : ''}  ${full ? styles.full : ''} `.trim();

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
