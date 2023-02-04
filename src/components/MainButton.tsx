import { ButtonProps } from '@/interfaces';
import React from 'react';

const MainButton = ({
  classNames,
  icon,
  text,
  onClick,
  param,
}: ButtonProps) => {
  const style =
    'text-white bg-purplish-700 hover:bg-[#4f479c] font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center outline-none';
  const styles = classNames ? `${style} ${classNames}` : style;
  const handleClick = () => {
    if (onClick && param) {
      onClick(param);
    }
  };
  return (
    <button type="button" className={styles} onClick={handleClick}>
      {text}
      {icon ? icon : null}
    </button>
  );
};

export default MainButton;
