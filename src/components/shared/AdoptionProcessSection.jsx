import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from 'components/ui/SectionTitle';

const processSteps = [
  'Procure um cachorro/cadela de seu interesse em nosso site;',
  'Preencha o formulário de cadastro de interesse;',
  'Avaliaremos seu perfil e seus dados para ver se tudo está de acordo com as exigências mínimas para a adoção;',
  'Após ter seu perfil analisado, retornaremos com uma mensagem via WhatsApp para dar andamento com o processo adotivo;',
  'Após a etapa anterior, é marcado um horário para você visitar a nossa clínica para conhecer o animal que você pretende adotar;',
  'Durante a visita, se você apresentar interesse em adotar o animal, daremos entrada ao processo de adoção, onde você assinará o termo de responsabilidade da guarda do animal;',
  'Por fim, você terá um novo amigo que irá lhe dar muito amor e carinho.',
];

function AdoptionProcessSection() {
  return (
    <section className="section-flex">
      <SectionTitle title="Processo de adoção" icon={faTimeline} />
      <ol className="list-inside list-decimal flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-md">
        {processSteps.map((item, index) => (
          <li
            key={index}
            className="p-3 bg-secondary rounded-lg hover:bg-purple-300 duration-300 marker:text-primary marker:text-lg marker:font-semibold"
          >
            <span className="ml-1">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default AdoptionProcessSection;
