import PetEditorForm from 'components/shared/PetEditorForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { usePet } from 'hooks/usePet';
import { petService } from 'services/petService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from 'components/ui/SectionTitle';
import PetCard from 'components/shared/PetCard';

export default function PetEditorPage() {
  const { petId } = useParams();
  const { pet, isLoading, error } = usePet(petId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({ defaultValues: pet });

  useEffect(() => {
    if (pet) {
      reset(pet);
    }
  }, [pet, reset]);

  const handleUpdatePet = async (formData) => {
    if (!window.confirm('Você tem certeza que deseja atualizar este pet?'))
      return;
    try {
      await petService.updatePet(petId, formData);
      alert('Pet atualizado com sucesso!');
    } catch (err) {
      console.error('Erro ao atualizar pet:', err);
      alert('Falha ao atualizar o pet!');
    }
  };

  const watchedValues = watch();
  const previewPet = { id: petId, ...watchedValues };

  if (isLoading)
    return (
      <main className="main-container-admin">
        <section className="section-flex-admin">
          <FontAwesomeIcon
            icon={faSpinner}
            className="text-4xl text-black animate-spin"
          />
        </section>
      </main>
    );
  if (error) return <p>Erro ao carregar o pet.</p>;

  return (
    <main className="main-container-admin">
      <section className="section-flex-admin">
        <SectionTitle title="Atualize os dados do pet" icon={faUpload} />
        <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] items-start mt-7 gap-7">
          <PetEditorForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={handleUpdatePet}
            errors={errors}
            isSubmitting={isSubmitting}
          />
          <PetCard pet={previewPet}>
            <div className="text-center py-2 bg-sky-100 rounded-xl">
              <span className="text-sky-500 font-bold text-lg">
                Pet a ser atualizado
              </span>
            </div>
          </PetCard>
        </div>
      </section>
    </main>
  );
}
