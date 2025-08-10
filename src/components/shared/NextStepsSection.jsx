import SectionTitle from 'components/ui/SectionTitle';
import InfoCard from './InfoCard';
import {
  faTimeline,
  faCalendarDays,
  faLocationDot,
  faClipboardQuestion,
  faCircleExclamation,
  faHouseChimneyUser,
} from '@fortawesome/free-solid-svg-icons';
import ContactInfoDiv from "./ContactInfoDiv";

const nextSteps = [
  {
    icon: faCalendarDays,
    title: 'Validação dos dados',
    quote:
      'Em até 3 dias úteis iremos avaliar os seus dados para verificar se condiz com as condições mínimas de adoção.',
  },
  {
    icon: faLocationDot,
    title: 'Visita',
    quote:
      'Após a validação, iremos te contatar via WhatsApp para marcar um horário de visitação ao nosso abrigo aonde você irá conhecer o seu novo cão.',
  },
  {
    icon: faClipboardQuestion,
    title: 'Entrevista e documentos',
    quote:
      'Será feita uma breve entrevista e uma verificação na sua documentação para que possamos finalizar o processo de adoção.',
  },
  {
    icon: faCircleExclamation,
    title: 'Avisos e orientações',
    quote:
      'Após o preenchimento de documentos, nossos especialistas darão a você orientações de como cuidar do seu novo cão, com dicas sobre alimentação, processo de adaptação e comportamentos do animal.',
  },
  {
    icon: faHouseChimneyUser,
    title: 'Adoção',
    quote:
      'A partir da etapa anterior, você se torna o tutor definitivo do cão, podendo levá-lo para seu novo lar no mesmo dia ou agendar uma data para buscá-lo.',
  },
];

function NextStepsSection() {
  return (
    <section className="section-flex">
      <SectionTitle title="Próximos passos" icon={faTimeline} />

      {nextSteps.map((step) => (
        <InfoCard
          key={step.title}
          icon={step.icon}
          title={step.title}
          quote={step.quote}
        />
      ))}

      <ContactInfoDiv/>
    </section>
  );
}

export default NextStepsSection;
