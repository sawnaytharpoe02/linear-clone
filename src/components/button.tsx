import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import Link from "next/link";

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

export const HighLight = ({ children }: { children: React.ReactNode }) => {
  return <span className="highlight">{children}</span>;
};

interface ButtonAsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonBaseProps = VariantProps<typeof buttonVariant> & {
  children: React.ReactNode;
};

type ButtonProps = ButtonBaseProps &
  (ButtonAsButtonProps | ButtonAsAnchorProps);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariant({ variant, size, className }));

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
