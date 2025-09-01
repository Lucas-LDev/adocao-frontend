import PropTypes from 'prop-types';
import { usePets } from 'hooks/usePets';
import { usePetManagement } from 'hooks/usePetManagement';
import PetListWrapper from 'components/ui/PetListWrapper';
import PetCard from './PetCard';
import DeleteButton from './actions/DeleteButton';
import EditButton from './actions/EditButton';
import AvailabilityButton from './actions/AvailabilityButton';

const renderVariant = (variant) => {
  switch (variant) {
    case 'edit':
    case 'availability':
      return (
        <h3 className="text-center md:text-center font-semibold text-xl text-red-500">
          Atenção!!! Cuidado para não atualizar algum dado errado.
        </h3>
      );
    case 'delete':
    default:
      return (
        <h3 className="text-center md:text-center font-semibold text-xl text-red-500">
          Atenção!!! Qualquer ação aqui é irreversível. Portanto, tenha cuidado!
        </h3>
      );
  }
};

export default function AdminPetList({ variant }) {
  const { pets: initialPets, isLoading, error, isSlow } = usePets();
  const { pets, handleDeletePet, handleToggleAvailability } =
    usePetManagement(initialPets);

  return (
    <div className="flex flex-col max-w-[1000px] gap-5">
      {renderVariant(variant)}
      <PetListWrapper
        isLoading={isLoading}
        error={error}
        isSlow={isSlow}
        pets={pets}
      >
        <div className="grid m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {pets.map((animal) => (
            <PetCard key={animal.id} pet={animal}>
              {variant === 'delete' && (
                <DeleteButton petId={animal.id} onDelete={handleDeletePet} />
              )}
              {variant === 'edit' && <EditButton petId={animal.id} />}
              {variant === 'availability' && (
                <AvailabilityButton
                  available={animal.isAvailable}
                  onToggle={() => handleToggleAvailability(animal.id)}
                />
              )}
            </PetCard>
          ))}
        </div>
      </PetListWrapper>
    </div>
  );
}

AdminPetList.propTypes = {
  filters: PropTypes.object,
  variant: PropTypes.oneOf(['delete', 'edit', 'availability']).isRequired,
};
