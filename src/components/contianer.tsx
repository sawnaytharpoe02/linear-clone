import React from "react";
import { cn } from "@/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[120rem] mx-auto bg-red-200 px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
