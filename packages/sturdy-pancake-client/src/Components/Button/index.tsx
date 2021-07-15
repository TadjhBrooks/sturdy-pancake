import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
}
function Button({ children = 'Click', ...props }: ButtonProps) {
  return (
    <button
      className="py-2 w-32 bg-blue-600 border border-blue-700 text-white hover:bg-blue-500 focus:bg-blue-600 text-opacity-90 rounded-full relative transform hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
