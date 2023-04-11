import React from 'react';
import style from './style.module.scss';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50, color = '#fff' }) => {
  return <div className={style.spinner} style={{ width: size, height: size, borderColor: `${color} transparent transparent transparent` }}></div>;
};

export default Spinner;