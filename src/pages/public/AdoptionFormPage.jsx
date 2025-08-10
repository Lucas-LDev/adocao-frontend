import { useParams, useNavigate } from 'react-router-dom';
import PetAdoptionPreview from 'components/shared/PetAdoptionPreview';
import AdoptionForm from 'components/shared/AdoptionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function AdoptionFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const enviarFormulario = async (data) => {
    const dadosCompletos = { ...data, id };
    console.log('Enviando para a API:', dadosCompletos);
    //just to simulate the time to send the user data form to an api
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Adoção solicitada com sucesso!');
    navigate('/parabens', { state: { fromForm: true } });
  };

  return (
    <main className="flex flex-col">
      <div className="section-flex border border-red-300 p-4">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-6xl text-red-500"
        />
        <p className="text-lg text-red-500">
          Atenção: Este site tem propósito educativo. Todos os dados exibidos neste site (cães, endereço, e-mail e telefone) são fictícios. Portanto, ao enviar os seus dados no formulário, nenhum dado será salvo.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[10fr_7fr] items-start gap-4 justify-center mt-10 max-w-[1000px] p-4 md:p-8 lg:p-0 m-auto">
        <AdoptionForm onSubmit={enviarFormulario} />
        <PetAdoptionPreview petId={id} />
      </div>
    </main>
  );
}

export default AdoptionFormPage;
