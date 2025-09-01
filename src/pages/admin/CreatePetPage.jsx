import SectionTitle from 'components/ui/SectionTitle';
import PetEditorForm from 'components/shared/PetEditorForm';
import PetCard from 'components/shared/PetCard';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { petService } from 'services/petService';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import dogPlaceholder from 'assets/svgs/dog.svg';

export default function CreatePetPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const handleCreatePet = async (data) => {
    try {
      await petService.createPet(data);
      alert('Pet criado com sucesso!');
      navigate('/control-panel');
    } catch (err) {
      console.error('Erro ao criar pet: ', err);
      alert('Falha ao cadastrar o pet!');
    }
  };

  const watchedValues = watch();

  const previewPet = {
    id: 'id',
    name: watchedValues.name,
    sex: watchedValues.sex,
    imgUrl: watchedValues.imgUrl || dogPlaceholder,
    ageRange: watchedValues.ageRange,
    size: watchedValues.size,
    isAvailable: true
  };

  return (
    <main className="main-container-admin">
      <section className="section-flex">
        <SectionTitle title="Cadastre um pet no sistema" icon={faPaw} />
        <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] items-start gap-7">
          <PetEditorForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={handleCreatePet}
            errors={errors}
            isSubmitting={isSubmitting}
          />
          <PetCard pet={previewPet}>
            <div className="text-center py-2 bg-red-50 rounded-xl">
              <span className="text-red-500 font-bold text-lg">
                Prévia do animal
              </span>
            </div>
          </PetCard>
        </div>
      </section>
    </main>
  );
}
