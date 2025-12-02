import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
