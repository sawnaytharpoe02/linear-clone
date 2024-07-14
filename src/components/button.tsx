import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariant = cva(
  "rounded-full transition duration-150 hover:ease-in inline-flex items-center",
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        primary: [
          "bg-primary-gradient hover:shadow-primary",
          "[&_.highlight]:ml-2",
        ],
        secondary: [
          "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 ease-in transition-color",
          "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight]:inline-flex [&_.highlight]:items-center [&_.highlight]:justify-center [&_.highlight]:ml-2 [&_.highlight]:-mr-2",
        ],
      },
      size: {
        sm: "h-7 px-3 text-xs",
        md: "h-8 px-4 text-sm",
        lg: "h-12 px-6 text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  children: React.ReactNode;
}

const Button = ({ children, className, variant, size }: ButtonProps) => {
  return (
    <button className={cn(buttonVariant({ variant, size, className }))}>
      {children}
    </button>
  );
};

export default Button;
