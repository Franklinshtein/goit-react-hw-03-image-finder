import React from 'react';
import style from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.Button} onClick={onClick}> {/*  клас з модульних стилів */}
      Load more
    </button>
  );
};

export default Button;
