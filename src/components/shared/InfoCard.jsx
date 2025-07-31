import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function InfoCard({ title, quote, icon }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-5 bg-white border-l-8 border-l-primary p-4 md:p-7 rounded-r-2xl hover:bg-violet-100 hover:shadow-md duration-300">
      <div className="bg-secondary flex-shrink-0 flex justify-center items-center h-[50px] w-[50px] rounded-full border">
        <FontAwesomeIcon
          icon={icon}
          className="text-primary h-[30px] w-[30px]"
        />
      </div>
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-md text-justify">{quote}</p>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default InfoCard;
