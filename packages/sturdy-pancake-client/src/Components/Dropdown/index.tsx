import React from 'react';
import Button from '../Button';
import Label from '../Label';
interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: any[];
  action?: string;
}

function Dropdown({ id, label, options, action, ...props }: DropdownProps) {
  return (
    <div>
      {label && <Label text={label} />}
      <select id={id} {...props}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Button>{action}</Button>
    </div>
  );
}
export default Dropdown;
