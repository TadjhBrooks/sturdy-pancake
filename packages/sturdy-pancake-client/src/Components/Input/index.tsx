import React from 'react';
import Button from '../Button';
import Label from '../Label';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  action?: string;
  placeholder?: string;
}
// TODO label useRef?
function Input({
  label,
  placeholder = 'Placeholder Text',
  action = 'Click',
  ...props
}: InputProps) {
  return (
    <div>
      {label && <Label text={label} />}
      <input placeholder={placeholder} {...props}></input>
      <Button>{action}</Button>
    </div>
  );
}
export default Input;
