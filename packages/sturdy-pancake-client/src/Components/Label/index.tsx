import React from 'react';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  text: string;
  iconRight?: string;
}
function Label({ className, text, iconRight, ...props }: LabelProps) {
  return (
    <label
      className={`flex text-center ${className ? className : ''}`}
      {...props}
    >
      <span className="inline-flex flex-1">{text}</span>
      {iconRight && <span className="text-right">{iconRight}</span>}
    </label>
  );
}
export default Label;
