import SectionTitle from 'components/ui/SectionTitle';
import ValidatedInput from 'components/ui/ValidatedInput';
import Button from 'components/ui/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'context/AuthContext';
import toast from 'react-hot-toast'

function LoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { login } = useAuth();

   const handleForgotPassword = () => {
    toast(
      "Para redefinir sua senha, entre em contato com a equipe técnica!",
      {
        className: 'bg-primary text-white rounded-lg shadow-lg',
        duration: 6000,
      }
    );
  };

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error('Failed to log in to your account:', error);
      toast.error('Usuário ou senha inválidos. Por favor, tente novamente.', {
        className: 'bg-red-500 text-white rounded-lg shadow-lg',
        duration: 6000,
      });
    }
  };

  return (
    <main>
      <section>
        <div className="flex flex-col max-w-[500px] m-auto justify-center bg-white rounded-xl mt-16 p-10 gap-4 shadow">
          <SectionTitle title="Acesso administrativo" />
          <h3 className="text-justify">
            Use suas credenciais de acesso para acessar o painel de
            configurações.
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <ValidatedInput
              id={'username'}
              label={'Email:'}
              type={'text'}
              placeholder={'Digite seu email'}
              register={register}
              errors={errors}
              validation={{
                required: 'O email é obrigatório',
                minLength: {
                  value: 2,
                  message: 'O email precisa ter pelo menos 2 caracteres.',
                },
                maxLength: {
                  value: 60,
                  message: 'O email pode conter no máximo 60 caracteres.',
                }
              }}
            />

            <ValidatedInput
              id={'password'}
              label={'Senha:'}
              type={'password'}
              placeholder={'Crie uma senha'}
              register={register}
              errors={errors}
              validation={{
                minLength: {
                  value: 8,
                  message: 'A senha deve ter no mínimo 8 caracteres.',
                },
                required: 'Digite sua senha.',
              }}
            />
            <p>
              <span
                onClick={handleForgotPassword}
                className="text-gray-500 text-sm cursor-pointer hover:underline"
              >
                Esqueceu sua senha?
              </span>
            </p>

            <Button
              className="w-full mt-4"
              text={isSubmitting ? 'Carregando...' : 'Fazer login'}
              type={'submit'}
              disabled={isSubmitting}
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginAdmin;
