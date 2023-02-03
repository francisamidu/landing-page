import React from 'react';
import { ButtonProps } from '@/interfaces';
const SecondaryButton = ({
  classNames,
  icon,
  text,
  onClick,
  param,
}: ButtonProps) => {
  const style =
    'text-white bg-black border-2 border-gray-100 hover:bg-gray-100 hover:text-black font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center outline-none transition-colors duration-200';
  const styles = classNames ? `${style} ${classNames}` : style;
  const handleClick = () => {
    if (onClick && param) {
      onClick(param);
    }
  };
  return (
    <button type="button" className={styles} onClick={handleClick}>
      <span className="mr-2">{text}</span>
      {icon ? icon : null}
    </button>
  );
};

export default SecondaryButton;
