import React, { useState } from 'react';
import Label from '../Label';

interface AccordianProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
function Accordian({ label, children, ...props }: AccordianProps) {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div className="py-1" onClick={handleToggle} {...props}>
      <Label
        className="cursor-pointer"
        text={label}
        iconRight={hidden ? '+' : '-'}
      />
      <div
        className={`overflow-hidden transition duration-1000 ease-in-out ${
          hidden ? 'h-0' : 'h-auto'
        }`}
      >
        <hr className="py-1 border-black" />
        {children}
      </div>
    </div>
  );
}
export default Accordian;
