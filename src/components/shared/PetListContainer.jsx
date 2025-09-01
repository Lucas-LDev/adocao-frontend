import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { usePets } from 'hooks/usePets';
import { petService } from 'services/petService';

import PetCardSkeleton from './PetCardSkeleton';
import PetCard from './PetCard';
import SectionTitle from 'components/ui/SectionTitle';
import ContactInfoSection from './ContactInfoDiv';
import Button from 'components/ui/Button';
import {
  faPaw,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import AdoptButton from './actions/AdoptButton';
import DeleteButton from './actions/DeleteButton';
import EditButton from './actions/EditButton';
import AvailabilityButton from './actions/AvailabilityButton';

const renderVariant = (variant) => {
  switch (variant) {
    case 'delete':
      return (
        <h3 className="text-center md:text-center font-semibold text-xl text-red-500 my-4">
          Atenção!!! Qualquer ação aqui é irreversível. Portanto, tenha cuidado!
        </h3>
      );
    case 'update':
    case 'availability':
      return (
        <h3 className="text-center md:text-center font-semibold text-xl text-red-500 my-4">
          Atenção!!! Cuidado para não atualizar algum dado errado.
        </h3>
      );
    case 'display':
      return <SectionTitle title="Conheça seu novo amigo" icon={faPaw} />;
  }
};

function PetListContainer({
  limit,
  showViewAllButton = false,
  filters,
  variant,
}) {
  const { pets, setPets, isLoading, error, isSlow } = usePets(filters);

  useEffect(() => {
    if (isSlow && isLoading) {
      toast(
        'Conectando ao servidor... Esta operação pode demorar um pouco mais que o normal. Por favor, aguarde.',
        { duration: 10000, className: 'min-w-[200px] md:min-w-[500px]' }
      );
    }
  }, [isSlow, isLoading]);

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-[1000px] gap-5">
        {renderVariant(variant)}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {Array.from({ length: 3 }).map((_, index) => (
            <PetCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col max-w-[1000px] gap-5">
        <SectionTitle title={'Erro'} icon={faTriangleExclamation} />
        <p className="text-base md:text-lg text-justify text-red-500">
          Ops! Não conseguimos carregar os pets no momento. Tente atualizar a
          página. Se o problema continuar, fale com a gente pelas redes sociais
          abaixo.
        </p>
        <ContactInfoSection />
      </div>
    );
  }

  const handleDeletePet = async (petId) => {
    if (
      !window.confirm(
        'Você tem certeza que deseja remover este pet? (É irreversível.)'
      )
    )
      return;
    try {
      await petService.deletePet(petId);
      setPets((currentPets) => currentPets.filter((pet) => pet.id !== petId));
      alert('Pet removido com sucesso');
    } catch (err) {
      console.error('Erro ao remover pet:', err);
      alert('Erro ao remover o pet.');
    }
  };

  const handleToggleAvailability = async (petId) => {
    if (
      !window.confirm('Você tem certeza que deseja mudar o status deste pet?')
    )
      return;
    try {
      await petService.toggleAvailability(petId);
      setPets((currentPets) =>
        currentPets.map((pet) =>
          pet.id === petId ? { ...pet, isAvailable: !pet.isAvailable } : pet
        )
      );
      alert('Status do pet atualizado com sucesso.');
    } catch (err) {
      console.error('Erro ao atualizar o status do pet:', err);
      alert('Erro ao atualizar o status do pet.');
    }
  };

  return (
    <div className="flex flex-col max-w-[1000px] gap-5">
      {renderVariant(variant)}
      {pets.length > 0 ? (
        <>
          <div className="grid m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
            {pets.slice(0, limit).map((animal) => (
              <PetCard key={animal.id} pet={animal} variant={variant}>
                {variant === 'display' && <AdoptButton petId={animal.id} available={animal.isAvailable}/>}
                {variant === 'delete' && (
                  <DeleteButton petId={animal.id} onDelete={handleDeletePet} />
                )}
                {variant === 'edit' && (
                  <EditButton petId={animal.id} />
                )}
                {variant === 'availability' && (
                  <AvailabilityButton
                    available={animal.isAvailable}
                    onToggle={() => handleToggleAvailability(animal.id)}
                  />
                )}
              </PetCard>
            ))}
          </div>
          {showViewAllButton && (
            <Button to="/adotar" text="Ver todos os animais" />
          )}
        </>
      ) : (
        //in case no pets are found with the filters applied by the user
        <div className="text-center max-w-[300px] lg:max-w-full mx-auto">
          <p className="text-lg text-purple-600">
            Nenhum pet encontrado com essas características.
          </p>
          <p className="text-md text-purple-500 mt-2">
            Tente alterar ou limpar os filtros para encontrar outros animais!
          </p>
        </div>
      )}
    </div>
  );
}

PetListContainer.propTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleIcon: PropTypes.object,
  showViewAllButton: PropTypes.bool,
  limit: PropTypes.number,
  filters: PropTypes.shape({
    sex: PropTypes.string,
    ageRange: PropTypes.string,
    size: PropTypes.string,
  }),
  variant: PropTypes.string,
};

export default PetListContainer;
