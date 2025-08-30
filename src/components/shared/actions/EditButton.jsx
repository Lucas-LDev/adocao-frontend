import Button from 'components/ui/Button';
import PropTypes from 'prop-types';

export default function EditButton({ petId }) {
  return (
    <Button
      to={`/editor-pet/${petId}`}
      text="Editar"
      className={'w-full mt-auto bg-blue-500'}
    />
  );
}

EditButton.propTypes = {
  petId: PropTypes.string.isRequired,
};
