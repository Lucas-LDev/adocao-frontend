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
}) {
  const { pets, isLoading, error, isSlow } = usePets();
  useEffect(() => {
    if (isSlow && isLoading) {
      toast.error(
        'A conexão pode demorar um pouco, pois o servidor é gratuito. Por favor, aguarde...',
        { duration: 15000 }
      );
    }
  }, [isSlow, isLoading]);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center max-w-[1000px] m-auto p-3 lg:p-0 gap-5">
        <SectionTitle title={sectionTitle} icon={sectionTitleIcon} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {Array.from({ length: 3 }).map((_, index) => (
            <PetCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col items-center max-w-[1000px] m-auto p-3 lg:p-0 gap-5">
        <SectionTitle title={'Erro'} icon={faTriangleExclamation} />
        <p className="text-base md:text-lg text-justify text-red-500">
          Ops! Não conseguimos carregar os pets no momento. Tente atualizar a
          página. Se o problema continuar, fale com a gente pelas redes sociais
          abaixo.
        </p>
        <ContactInfoSection />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center max-w-[1000px] m-auto p-3 lg:p-0 gap-5">
      <SectionTitle title="Conheça seu novo amigo" icon={faPaw} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {pets.slice(0, limit).map((animal) => (
          <PetCard key={animal.id} pet={animal} />
        ))}
      </div>
      {showViewAllButton && <Button to="/" text="Ver todos os animais" />}
    </section>
  );
}

PetListContainer.propTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleIcon: PropTypes.object,
  showViewAllButton: PropTypes.bool,
  limit: PropTypes.number,
};

export default PetListContainer;
