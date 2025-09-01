import Button from 'components/ui/Button';
import PropTypes from 'prop-types';

export default function AdoptButton({ petId, available }) {
  if (!available) {
    return (
      <div className="bg-black/70 text-white m-auto p-2 rounded-xl font-medium w-full mt-auto line-through">
        Adotado
      </div>
    );
  }

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
  available: PropTypes.bool.isRequired
};
