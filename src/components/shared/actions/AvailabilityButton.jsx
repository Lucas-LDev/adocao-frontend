import Button from 'components/ui/Button';
import PropTypes from 'prop-types';

export default function AvailabilityButton({ available, onToggle }) {
  return (
    <Button
      text={`${available === true ? 'Marcar como adotado' : 'Tornar disponível'}`}
      className={`w-full mt-auto ${available === true ? 'bg-orange-500' : 'bg-lime-500'}`}
      onClick={onToggle}
    />
  );
}

AvailabilityButton.propTypes = {
  available: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
