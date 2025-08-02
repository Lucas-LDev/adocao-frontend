import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const contacts = [
  {
    link: 'mailto:adocao@contato.com.br',
    icon: faEnvelope,
    label: 'adocao@contato.com.br',
  },
  {
    link: 'https://wa.me/55519xxxxxxxx',
    icon: faWhatsapp,
    label: '(51) 9xxxx-xxxx',
  },
];

function ContactInfoSection() {
  return (
    <section className="max-w-[1000px] m-auto p-3 lg:p-0 w-full">
      <div className="flex flex-col bg-purple-gradient py-7 px-5 gap-4 rounded-2xl w-full items-center">
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center justify-center h-[50px] w-[50px] bg-primary rounded-full">
            <FontAwesomeIcon
              icon={faComments}
              className="text-white h-[30px] w-[30px]"
            />
          </div>
          <h3 className="text-white font-semibold text-xl">Dúvidas?</h3>
        </div>
        <div>
          <p className="text-white font-medium text-base md:text-lg text-justify">
            Ficou com alguma dúvida ou tem alguma sugestão? Entre em contato
            conosco:
          </p>
          <div className="grid grid-flow-row md:grid-cols-2 gap-3 mt-4">
            {contacts.map((contact) => (
              <a
                key={contact.link}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-white/45 rounded-xl flex items-center gap-2 text-white flex-1 justify-center hover:bg-accent bg-white/20 duration-300 transition-colors"
              >
                <FontAwesomeIcon
                  icon={contact.icon}
                  className="h-[25px] w-[25px]"
                />
                <span className="font-semibold">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
