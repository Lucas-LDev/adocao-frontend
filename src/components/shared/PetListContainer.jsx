import toast from 'react-hot-toast';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePets } from 'hooks/usePets';
import PetCardSkeleton from './PetCardSkeleton';
import PetCard from './PetCard';
import SectionTitle from 'components/ui/SectionTitle';
import ContactInfoSection from './ContactInfoDiv';
import Button from 'components/ui/Button';
import {
  faPaw,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

function PetListContainer({
  sectionTitle = 'Conheça seu novo amigo',
  sectionTitleIcon = faPaw,
  limit,
  showViewAllButton = false,
  filters,
}) {
  const { pets, isLoading, error, isSlow } = usePets(filters);
  useEffect(() => {
    if (isSlow && isLoading ) {
      toast.error(
        'A conexão pode demorar um pouco, pois o servidor é gratuito. Por favor, aguarde...',
        { duration: 10000, className: 'min-w-[200px] md:min-w-[500px]' }
      );
    }
  }, [isSlow, isLoading]);

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-[1000px] gap-5">
        <SectionTitle title={sectionTitle} icon={sectionTitleIcon} />
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

  return (
    <div className="flex flex-col max-w-[1000px] gap-5">
      <SectionTitle title="Conheça seu novo amigo" icon={faPaw}/>
      {pets.length > 0 ? (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {pets.slice(0, limit).map((animal) => (
            <PetCard key={animal.id} pet={animal} />
          ))}
        </div>
        {showViewAllButton && <Button to="/adotar" text="Ver todos os animais" />}
      </>
    ) : (
      //in case no pets are found with the filters applied by the user
      <div className="text-center max-w-[300px] lg:max-w-full mx-auto">
        <p className="text-lg text-purple-600">Nenhum pet encontrado com essas características.</p>
        <p className="text-md text-purple-400 mt-2">Tente alterar ou limpar os filtros para encontrar outros animais!</p>
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
};

export default PetListContainer;
