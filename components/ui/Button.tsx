import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-button';
  
  const variants = {
    primary: 'text-white focus:ring-[#4A85E4] hover:opacity-90',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-800',
    outline: 'border-2 text-[#4A85E4] hover:text-white focus:ring-[#4A85E4]',
  };

  const getVariantStyle = (v: 'primary' | 'secondary' | 'outline') => {
    if (v === 'primary') return { backgroundColor: '#4A85E4', fontFamily: 'var(--font-inter)' };
    if (v === 'outline') return { borderColor: '#4A85E4', fontFamily: 'var(--font-inter)' };
    return { fontFamily: 'var(--font-inter)' };
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-2 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-bold',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} style={getVariantStyle(variant)}>
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </a>
    );
  }
  
  return (
    <button className={classes} style={getVariantStyle(variant)} {...props}>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
