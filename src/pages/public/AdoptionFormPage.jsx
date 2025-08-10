import { useParams } from 'react-router-dom';
import PetAdoptionPreview from "components/shared/PetAdoptionPreview";
import AdoptionForm from "components/shared/AdoptionForm";

function AdoptionFormPage() {
  const { id } = useParams();

  const enviarFormulario = async (data) => {
    const dadosCompletos = { ...data, id };
    console.log("Enviando para a API:", dadosCompletos);
    //just to simulate the time to send the user data form to an api
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Adoção solicitada com sucesso!");
  };

  return (
    <main className="flex justify-center p-4 md:p-8 lg:p-0">
      <div className="grid grid-cols-1 xl:grid-cols-[10fr_7fr] items-start gap-4 justify-center mt-10 max-w-[1000px] mb-10">
        <AdoptionForm onSubmit={enviarFormulario} />
        <PetAdoptionPreview petId={id} />
      </div>
    </main>
  );
}

export default AdoptionFormPage;
