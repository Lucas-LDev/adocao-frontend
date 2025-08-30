import SectionTop from 'components/shared/SectionTop';
import NextStepsSection from 'components/shared/NextStepsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CongratulationsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.fromForm) {
      navigate('/');
    }
  }, [location.state, navigate]);

  return (
    <main className="main-container">
      <SectionTop
        title="Parabéns!"
        quote="Sua iniciativa dará a um cãozinho a chance de receber amor, carinho e um novo lar."
      ></SectionTop>

      <div className="section-flex border border-red-300 p-4">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-6xl text-red-500"
        />
        <p className="text-lg text-red-500">
          Atenção: Este site tem propósito educativo. Todos os dados exibidos
          neste site (cães, endereço, e-mail e telefone) são fictícios.
          Portanto, ao enviar os seus dados no formulário, nenhum dado foi
          salvo.
        </p>
      </div>

      <NextStepsSection />
    </main>
  );
}

export default CongratulationsPage;
