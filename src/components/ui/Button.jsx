import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Button({text, className, onClick, to = null, type = 'button', disabled = false }) {
  const defaultStyle = "bg-accent hover:bg-primary text-white p-2 rounded-xl duration-300 font-medium";
  const finalClassname = `${defaultStyle} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={`block ${finalClassname}`}>
        {text}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      className={finalClassname}
      onClick={onClick}
      disabled={disabled}
    >{text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;