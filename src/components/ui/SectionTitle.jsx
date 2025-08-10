import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SectionTitle({ title, icon, className }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className={`text-section mb-1 ${className}`}>
          <FontAwesomeIcon icon={icon} /> {title}
        </h2>
        <div className="h-1 w-full bg-gradient-to-r from-[#8B5CF6] to-[#FFA500] rounded-full"></div>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
