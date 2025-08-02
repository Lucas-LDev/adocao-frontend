import SectionTitle from 'components/ui/SectionTitle';
import InfoCard from "./InfoCard";
import { faHeart, faShieldDog, faHandshake, faRibbon, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const awarenessInfo = [
  {icon: faHeart, title: "Um gesto de amor", quote: "Adotando, você dá a um animalzinho a oportunidade de viver de forma digna."},
  {icon: faShieldDog, title: "Cães saudáveis", quote: "Nossos animais passam por rigorosas inspeções de saúde por veterinários experientes."},
  {icon: faHandshake, title: "Amizade fiel", quote: "Cães adotados costumam ser muito carinhosos, porque não esquecem quem deu a eles um novo lar."},
  {icon: faRibbon, title: "Comércio ilegal", quote: "O comércio ilegal de animais causa sofrimento silencioso em abrigos clandestinos. Ajude a acabar com isso."},
];

function AwarenessSection() {
  return (
    <section>
      <div className="flex flex-col items-center max-w-[1000px] m-auto p-3 lg:p-0 gap-5">
        <SectionTitle icon={faBullhorn} title="Conscientização"/>
        <div className="grid grid-cols-1 gap-4">
          {awarenessInfo.map((info, index) => (
            <InfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              quote={info.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwarenessSection;