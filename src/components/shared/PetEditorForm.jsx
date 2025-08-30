import PropTypes from 'prop-types';
import ValidatedInput from 'components/ui/ValidatedInput';
import ValidatedSelect from 'components/ui/ValidatedSelect';
import Button from 'components/ui/Button';

const optionsSexo = [
  { value: '', label: 'Selecione o sexo...' },
  { value: 'FEMALE', label: 'Fêmea' },
  { value: 'MALE', label: 'Macho' },
];

const optionsFaixaEtaria = [
  { value: '', label: 'Selecione a idade...' },
  { value: 'PUPPY', label: 'Filhote' },
  { value: 'YOUNG', label: 'Jovem' },
  { value: 'ADULT', label: 'Adulto' },
];

const optionsPorte = [
  { value: '', label: 'Selecione o porte...' },
  { value: 'SMALL', label: 'Pequeno' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LARGE', label: 'Grande' },
];

export default function PetEditorForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 shadow rounded-xl p-4 max-w-[400px] bg-white"
    >
      <ValidatedInput
        className={'font-semibold text-primary'}
        id={'name'}
        label={'Nome do animal:'}
        type={'text'}
        placeholder={'Digite o nome do animal'}
        register={register}
        errors={errors}
        validation={{
          required: 'O nome do animal é obrigatório',
          minLength: {
            value: 3,
            message: 'O nome precisa ter pelo menos 3 caracteres.',
          },
          maxLength: {
            value: 20,
            message: 'O nome pode conter no máximo 20 caracteres.',
          },
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
            message:
              'Nome inválido. O nome só pode contar letras e caracteres de acentuação.',
          },
        }}
      />

      <ValidatedSelect
        id="sex"
        label="Sexo:"
        register={register}
        options={optionsSexo}
        errors={errors}
        validation={{ required: 'O sexo é obrigatório.' }}
      />

      <ValidatedSelect
        id="ageRange"
        label="Faixa Etária:"
        register={register}
        options={optionsFaixaEtaria}
        errors={errors}
        validation={{ required: 'A faixa etária é obrigatória.' }}
      />

      <ValidatedSelect
        id="size"
        label="Porte:"
        register={register}
        options={optionsPorte}
        errors={errors}
        validation={{ required: 'O porte é obrigatório.' }}
      />

      <ValidatedInput
        className={'font-semibold text-primary'}
        id={'imgUrl'}
        label={'URL da imagem:'}
        type={'url'}
        placeholder={'https://exemplo.com/imagem.jpg'}
        register={register}
        errors={errors}
        validation={{
          required: 'A URL da imagem é obrigatória.',
          pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
            message: 'Por favor, insira uma URL válida.',
          },
        }}
      />

      <Button
        type="submit"
        text={isSubmitting ? 'Salvando...' : 'Salvar Pet'}
        disabled={isSubmitting}
        className="mt-2 w-full"
      />
    </form>
  );
}

PetEditorForm.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};