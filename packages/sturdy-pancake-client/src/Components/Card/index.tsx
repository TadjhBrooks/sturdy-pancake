import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-y-5 bg-gray-100 rounded-xl p-4 shadow-md border border-gray-200 overflow-hidden ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
export default Card;
