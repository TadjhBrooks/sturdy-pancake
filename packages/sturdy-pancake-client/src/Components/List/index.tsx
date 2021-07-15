import React from 'react';
import Label from '../Label';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  label?: string;
  array: any[];
}
function List({ label, array, ...props }: ListProps): JSX.Element {
  return (
    <div className="text-left">
      {label && <Label text={label} />}{' '}
      <ul {...props}>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
