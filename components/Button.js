import Link from 'next/link';

/**
 * Reusable Button Component
 * 
 * @param {string} variant - Button style variant ('primary', 'secondary', 'outline')
 * @param {string} size - Button size ('sm', 'md', 'lg')
 * @param {string} href - Link URL (if using as link button)
 * @param {function} onClick - Click handler function
 * @param {string} type - Button type ('button', 'submit', 'reset')
 * @param {boolean} fullWidth - Whether button takes full width
 * @param {boolean} disabled - Whether button is disabled
 * @param {boolean} isExternal - Whether link opens in new tab
 * @param {React.ReactNode} children - Button content
 * @param {object} className - Additional class names
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  isExternal = false,
  children,
  className = '',
  ...props
}) {
  // Define base and variant-specific styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;
  
  // If there's an href, render as Link component
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} className={buttonStyles} onClick={onClick} {...props}>
          {children}
        </Link>
      );
    }
  }
  
  // Otherwise, render as button
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
