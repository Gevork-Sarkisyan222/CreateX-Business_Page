import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return <div className={`max-w-[1225px] mx-auto ${className}`}>{children}</div>;
}

export default Container;
