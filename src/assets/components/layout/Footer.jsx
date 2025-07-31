import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const navLinks = [
  { to: '/', label: 'Página inicial' },
  { to: '/', label: 'Adotar' },
  { to: '/', label: 'Como adotar' },
  { to: '/', label: 'Sobre nós' },
];

const contactInfo = [
  {
    icon: faEnvelope,
    text: 'adocao@contato.com.br',
    href: 'mailto:adocao@contato.com.br',
    label: 'E-mail',
  },
  {
    icon: faPhone,
    text: '(51) 9xxxx-xxxx',
    href: 'rel:+55519xxxxxxxx',
    label: 'Telefone',
  },
  {
    icon: faLocationDot,
    text: 'Rua da Adocão, 777, Porto Alegre, RS',
    href: 'https://www.google.com.br/maps/',
    label: 'Endereço',
  },
];

const socialLinks = [
  { icon: faGithub, label: 'GitHub', href: 'https://github.com/Lucas-LDev' },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucas-leblein',
  },
];

const linkClasses = 'transition-colors duration-300 hover:text-accent';

function FooterSection({ title, children, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center md:items-start text-center md:text-left ${className}`}
    >
      <h3 className="font-medium text-xl mb-4">{title}</h3>
      {children}
    </div>
  );
}
FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-purple-gradient text-slate-50 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 text-center pt-5 max-w-3xl">
        <h3 className="text-2xl font-bold">ADOCÃO</h3>
        <p className="text-lg">
          ADOCÃO é um projeto <span className="text-accent">fictício</span>,
          desenvolvido para fins educacionais e de portfólio. Todos os animais e
          informações são <span className="text-accent">simulados</span>.
        </p>
      </div>

      {/*main container with navigation, contact and social media links.*/}
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 lg:gap-28 w-full max-w-6xl py-8">
        <FooterSection title="Navegação:">
          <nav>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClasses}>{link.label}</Link>
                </li>    
              ))}
            </ul>
          </nav>
        </FooterSection>

        <FooterSection title="Contatos:">
          <address className="flex flex-col gap-3 not-italic items-center md:items-start">
            {contactInfo.map((contact) => (
              <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className={`${linkClasses} flex items-center gap-2`}>
                <FontAwesomeIcon icon={contact.icon} className="h-5 text-center"/>
                <span>{contact.text}</span>
              </a>    
            ))}
          </address>
        </FooterSection>

        <FooterSection title="Minhas redes sociais:">
          <nav>
            <ul className="flex flex-col gap-3 not-italic items-center md:items-start">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className={`${linkClasses} flex items-center gap-2`}>
                  <FontAwesomeIcon icon={social.icon} className="h-5 text-center"/>
                  <span>{social.label}</span>
                </a> 
                </li>   
              ))}
            </ul>
          </nav>
        </FooterSection>
      </div>
      
      <div className="w-full text-center p-5 border-t border-slate-200 mt-4">
        <p>© 2025 ADOCÃO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
