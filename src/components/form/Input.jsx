import { forwardRef } from 'react';
import classes from './Input.module.css';

export const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        id={props.name}
        type={props.type}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div className={props.errorDiv}>{props.errorMessage}</div>
    </div>
  );
});
