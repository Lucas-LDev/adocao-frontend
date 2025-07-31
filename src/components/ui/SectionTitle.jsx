import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SectionTitle({title, icon}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-section mb-1"><FontAwesomeIcon icon={icon} /> {title}</h2>
      <div className="h-1 w-full md:w-[200px] mb-5 bg-gradient-to-r from-[#8B5CF6] to-[#FFA500] rounded-full"></div>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default SectionTitle;