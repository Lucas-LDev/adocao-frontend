import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faListCheck } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from 'components/ui/SectionTitle';

const requirements = [
  'Ter idade mínima de 18 anos;',
  'Possuir residência, própria ou alugada. (Iremos solicitar um comprovante de residência no momento da adoção);',
  'Ter condições financeiras para cuidar do cão;',
  'Possuir em sua moradia um espaço adequado para o animal;',
  'Assinar o termo de adoção, um documento em que você confirma se responsabilizar pela guarda integral do animal adotado.',
];

function RequirementsSection() {
  return (
    <section className="section-flex">
      <SectionTitle title="Requisitos mínimos para adotar" icon={faListCheck} />
      <ul className="list-none flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-md">
        {requirements.map((item, index) => (
          <li
            key={index}
            className="p-3 bg-secondary rounded-lg hover:bg-purple-300 duration-300"
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-primary mr-1 text-lg"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RequirementsSection;
