import React from 'react';
import { MdMessage } from "react-icons/md";
import styles from './Button.module.css';

const  Button = (props) => {
  const { isoutline, icon, text } = props;

    
  return (
    <button className={isoutline ? styles.outline_btn : styles.primary_btn}>
    {/* <MdMessage/> */}
    {props.icon}
    {props.text}
    </button>
  );
};

export default Button;