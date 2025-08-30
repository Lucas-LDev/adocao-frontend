import Button from 'components/ui/Button';
import PropTypes from 'prop-types';

export default function AdoptButton({ petId }) {
  return (
    <Button
      to={`/formulario-adocao/${petId}`}
      text={'Adotar'}
      className={'w-full mt-auto'}
    />
  );
}

AdoptButton.propTypes = {
  petId: PropTypes.string.isRequired,
};
