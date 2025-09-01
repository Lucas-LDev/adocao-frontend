import PropTypes from 'prop-types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import PetCardSkeleton from 'components/shared/PetCardSkeleton';
import SectionTitle from 'components/ui/SectionTitle';
import ContactInfoDiv from 'components/shared/ContactInfoDiv';
import {
  faSpinner,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PetListWrapper({
  isLoading,
  isSlow,
  error,
  pets,
  children,
  skeletonCount = 3,
}) {
  useEffect(() => {
    if (isSlow && isLoading) {
      const uniqueToast = toast.loading(
        'Conectando ao servidor... Esta operação pode demorar um pouco. Por favor, aguarde.',
        {
          className: 'min-w-[200px] md:min-w-[400px] border-2 border-primary',
          position: 'bottom-right',
          icon: <FontAwesomeIcon icon={faSpinner} spin />,
        }
      );
      return () => toast.dismiss(uniqueToast);
    }
  }, [isSlow, isLoading]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <PetCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <>
        <SectionTitle title={'Erro'} icon={faTriangleExclamation} />
        <p className="text-base md:text-lg text-justify text-red-500">
          Ops! Não conseguimos carregar os pets. Tente atualizar a página.
        </p>
        <ContactInfoDiv />
      </>
    );
  }

  if (!pets || pets.length === 0) {
    return (
      <div className="text-center max-w-[300px] lg:max-w-full mx-auto">
        <p className="text-lg text-purple-600">
          Nenhum pet encontrado com essas características.
        </p>
        <p className="text-md text-purple-500 mt-2">
          Tente alterar ou limpar os filtros!
        </p>
      </div>
    );
  }

  //if not erros
  return children;
}

PetListWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSlow: PropTypes.bool,
  error: PropTypes.object,
  pets: PropTypes.array,
  children: PropTypes.node.isRequired,
  skeletonCount: PropTypes.number,
};
