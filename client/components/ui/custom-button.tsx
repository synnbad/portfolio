import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-portfolio-primary text-white hover:bg-blue-600 focus:ring-portfolio-primary shadow-sm",
    secondary: "bg-gray-100 text-portfolio-dark-text hover:bg-gray-200 focus:ring-gray-500",
    accent: "bg-portfolio-accent text-white hover:bg-yellow-500 focus:ring-portfolio-accent shadow-sm",
    outline: "border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white focus:ring-portfolio-primary"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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
