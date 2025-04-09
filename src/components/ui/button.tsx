import React from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ size = "md", variant = "solid", className, children, onClick }) => {
  const baseStyle = "rounded-lg font-medium transition-colors duration-200";
  const sizeStyles = size === "sm" ? "py-2 px-4 text-sm" : size === "lg" ? "py-3 px-8 text-lg" : "py-2.5 px-6";
  const variantStyles = variant === "outline" ? "border-2 border-white text-white hover:bg-white hover:text-black" : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button className={`${baseStyle} ${sizeStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
