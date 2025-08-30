import Button from "components/ui/Button";
import PropTypes from 'prop-types';

export default function DeleteButton({petId, onDelete}) {
  return (
    <Button text={'Remover'} className={'w-full mt-auto bg-red-500'} onClick={()=> onDelete(petId)}  />
  );
}

DeleteButton.propTypes = {
  petId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};