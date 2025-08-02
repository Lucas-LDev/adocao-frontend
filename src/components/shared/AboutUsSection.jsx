import InfoCard from './InfoCard';
import SectionTitle from 'components/ui/SectionTitle';
import {
  faBook,
  faHandHoldingHeart,
  faHeart,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

const aboutUsBlocks = [
  {
    icon: faBook,
    title: 'História',
    quote:
      'Nossa organização surgiu em 2017, quando um grupo de veterinários se reuniu em prol de uma causa nobre: ajudar animais de rua a encontrar um lar amoroso e uma família que os trate com bastante amor e carinho.',
  },
  {
    icon: faHandHoldingHeart,
    title: ' O que fazemos',
    quote:
      'Resgatamos cachorros e cadelas em situação de rua, damos um lar provisório, cuidados, tratamentos e, no fim, buscamos um novo lar para eles.',
  },
  {
    icon: faHeart,
    title: 'Por que realizamos nossa atividade?',
    quote:
      'Porque acreditamos em um mundo melhor. Afinal de contas, se vivemos apenas uma vida, por que não dedicar uma parte dela a transformar a vida de um animalzinho em situação vulnerável?',
  },
];

function AboutUsSection() {
  return (
    <section>
      <div className="flex flex-col items-center max-w-[1000px] m-auto p-3 lg:p-0 gap-5">
        <SectionTitle title="Nossa história" icon={faLandmark} />
        {aboutUsBlocks.map((item) => (
          <InfoCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            quote={item.quote}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutUsSection;
