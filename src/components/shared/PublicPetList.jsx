import PropTypes from 'prop-types';
import { usePets } from 'hooks/usePets';
import PetListWrapper from 'components/ui/PetListWrapper';
import PetCard from './PetCard';
import AdoptButton from './actions/AdoptButton';
import Button from 'components/ui/Button';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from 'components/ui/SectionTitle';

export default function PublicPetList({
  filters,
  limit,
  showViewAllButton = false,
}) {
  const queryFilters = { ...filters, isAvailable: true };
  const { pets, isLoading, error, isSlow } = usePets(queryFilters);

  return (
    <div className="flex flex-col max-w-[1000px] gap-5">
      <SectionTitle title="Conheça seu novo amigo" icon={faPaw} />
      <PetListWrapper
        isLoading={isLoading}
        error={error}
        isSlow={isSlow}
        pets={pets}
      >
        <div className="grid m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {pets?.slice(0, limit).map((animal) => (
            <PetCard key={animal.id} pet={animal}>
              <AdoptButton petId={animal.id} available={animal.isAvailable} />
            </PetCard>
          ))}
        </div>
        {showViewAllButton && (
          <Button to="/adotar" text="Ver todos os animais" />
        )}
      </PetListWrapper>
    </div>
  );
}

PublicPetList.propTypes = {
  filters: PropTypes.object,
  limit: PropTypes.number,
  showViewAllButton: PropTypes.bool,
};
