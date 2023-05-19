import { ElementType, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [x: string]: any;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  as: Tag = "button",
  ...otherProps
}) => {
  const baseStyles = `  font-bold  rounded active:scale-90 transition`;

  return (
    <Tag {...otherProps} className={twMerge(baseStyles, className)}>
      {children}
    </Tag>
  );
};
