import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-portfolio-primary text-white hover:bg-[#314B5B] focus-visible:ring-portfolio-primary",
    secondary:
      "bg-portfolio-soft-gray text-portfolio-dark-text hover:bg-portfolio-border focus-visible:ring-portfolio-primary",
    accent:
      "bg-portfolio-accent text-portfolio-primary hover:bg-[#D8E4E8] focus-visible:ring-portfolio-primary",
    outline:
      "border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white focus-visible:ring-portfolio-primary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
