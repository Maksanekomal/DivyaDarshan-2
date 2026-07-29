
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) => {
  const classes =
    "inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl";

  if (to) {
    return (
      <Link to={to} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;