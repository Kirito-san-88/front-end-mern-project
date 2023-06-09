import React from 'react';

const LoadingMessage: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => {
  return <p>{children}</p>;
};

export default LoadingMessage;
