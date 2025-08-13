import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FieldsetRadio from "components/ui/FieldsetRadio";
import ValidatedInput from "components/ui/ValidatedInput";
import SectionTitle from 'components/ui/SectionTitle';
import Button from 'components/ui/Button';

const opcoesMoradia = [
  { value: 'apartamento', label: 'Apartamento' },
  { value: 'casa', label: 'Casa' },
];

const opcoesSimNao = [
  { value: 'sim', label: 'Sim' },
  { value: 'nao', label: 'Não' },
];

function AdoptionForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="order-2 xl:order-none p-8 bg-white h-full max-w-[700px] rounded-xl shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <SectionTitle title="Formulário de adoção" icon={faHeart} />
        <div className="grid grid-flow-row gap-4 text-sm mt-7">
          <ValidatedInput
            id={'nome'}
            label={'Nome completo:'}
            type={'text'}
            placeholder={'Digite seu nome completo'}
            register={register}
            errors={errors}
            validation={{
              required: 'O nome é obrigatório',
              minLength: {
                value: 4,
                message: 'O nome precisa ter pelo menos 4 caracteres.',
              },
              maxLength: {
                value: 60,
                message: 'O nome pode conter no máximo 60 caracteres.',
              },
              pattern: {
                value: /^[\p{L}\s'-]+$/u,
                message: 'Nome inválido. Use apenas letras, espaços e hifens.',
              },
            }}
          />

          <ValidatedInput
            id={'idade'}
            label={'Idade:'}
            type={'number'}
            placeholder={'Digite sua idade'}
            register={register}
            errors={errors}
            validation={{
              required: 'A idade é obrigatória',
              min: {
                value: 18,
                message:
                  'Para adotar, é preciso ter ao menos 18 anos de idade.',
              },
              max: {
                value: 99,
                message:
                  'Para adotar, é preciso ter menos de 99 anos de idade.',
              },
            }}
          />

          <ValidatedInput
            id={'telefone'}
            label={'Telefone/WhatsApp:'}
            type={'tel'}
            placeholder={'Digite seu número de telefone'}
            register={register}
            errors={errors}
            mask="(99) 99999-9999"
            validation={{
              pattern: {
                value: /^\(\d{2}\) 9\d{4}-\d{4}$/,
                message:
                  'Formato de telefone inválido. Formato: (xx) 9xxxx-xxxx.',
              },
              required:
                'Por favor, digite o seu número de telefone para entrarmos em contato com você.',
            }}
          />

          <FieldsetRadio
            legend='Mora em'
            name='tipoMoradia'
            options={opcoesMoradia}
            register={register}
            errors={errors}
            validation={{
              required: 'Por favor, selecione o tipo de moradia.',
            }}
          />

          <FieldsetRadio
            legend='Sua residência possui espaço suficiente para comportar o animal?'
            name='espacoSuficiente'
            options={opcoesSimNao}
            register={register}
            errors={errors}
            validation={{ required: 'Por favor, selecione uma opção.' }}
          />

          <FieldsetRadio
            legend='Todos em sua residência concordam com a adoção?'
            name='concorda'
            options={opcoesSimNao}
            register={register}
            errors={errors}
            validation={{ required: 'Por favor, selecione uma opção.' }}
          />

          <FieldsetRadio
            legend='Você está ciente que a adoção é um compromisso de longo prazo? Pretende continuar com o processo de adoção?'
            name='ciente'
            options={opcoesSimNao}
            register={register}
            errors={errors}
            validation={{ required: 'Por favor, selecione uma opção.' }}
          />
        </div>
        <Button
          className="w-full mt-7"
          text={isSubmitting ? 'Enviando..' : 'Enviar Solicitação'}
          type={'submit'}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}

AdoptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AdoptionForm;
