import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { usePet } from 'hooks/usePet';
import { SEXO_MAP, FAIXA_ETARIA_MAP, PORTE_MAP } from 'utils/mappings';
import SectionTitle from 'components/ui/SectionTitle';
import ContactInfoDiv from './ContactInfoDiv';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PetAdoptionPreview({ petId }) {
  const { pet, isLoading, error, isSlow } = usePet(petId);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (pet && pet.isAvailable === false) {
      navigate('/');
      toast.error('Este animal não está disponível para adoção.');
    }
  }, [pet, navigate]);

  if (isLoading) {
    return (
      <div className="order-1 md:order-none flex flex-col justify-start p-8 bg-purple-gradient rounded-xl shadow max-w-[700px] animate-pulse gap-5">
        <div className="h-10 w-full md:w-3/4 lg:w-full xl:h-20 bg-violet-500 rounded self-center">
          {/*title*/}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video bg-violet-500 rounded-3xl">
            {/*image*/}
          </div>
          <div className="flex flex-col justify-start items-center gap-2.5 mt-4">
            <div className="h-10 w-32 bg-violet-500 rounded ">
              {/*animal name*/}
            </div>
            <div className="h-4 w-28 bg-violet-500 rounded">{/*sex*/}</div>
            <div className="h-4 w-28 bg-violet-500 rounded">{/*ageRange*/}</div>
            <div className="h-4 w-28 bg-violet-500 rounded">{/*size*/}</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="order-1 md:order-none flex flex-col justify-start align-center p-8 bg-purple-gradient rounded-xl shadow max-w-[700px]">
        <p className="text-white text-lg font-semibold text-justify mb-5">
          Erro ao carregar os dados do animal. Tente recarregar a página, se o
          error persistir, entre em contato conosco.
        </p>
        <ContactInfoDiv variant="col" />
      </div>
    );
  }

  if (!pet) {
    return (
      <div>
        <p>Pet não encontrado.</p>
      </div>
    );
  }

  const sexoDisplay = SEXO_MAP[pet.sex] || pet.sex;
  const faixaEtariaDisplay = FAIXA_ETARIA_MAP[pet.ageRange] || pet.ageRange;
  const porteDisplay = PORTE_MAP[pet.size] || pet.size;

  return (
    <div className="order-1 md:order-none flex flex-col justify-start align-center p-8 bg-purple-gradient rounded-xl shadow max-w-[700px] gap-6">
      <SectionTitle
        title="Seu futuro companheiro"
        icon={faBone}
        className={'text-white'}
      />
      <div className="flex flex-col gap-4 items-center">
        <div className="rounded-3xl overflow-hidden">
          <img src={pet.imgUrl} alt={`Foto de ${pet.name}`} className="" />
        </div>

        <div className="text-center text-white">
          <h3 className="text-3xl font-bold">{pet.name}</h3>
          <p className="text-lg">Sexo: {sexoDisplay}</p>
          <p className="text-lg">Faixa etária: {faixaEtariaDisplay}</p>
          <p className="text-lg">Porte: {porteDisplay}</p>
        </div>
      </div>
    </div>
  );
}

PetAdoptionPreview.propTypes = {
  petId: PropTypes.string.isRequired,
};

export default PetAdoptionPreview;
