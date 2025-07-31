import logo from '/src/assets/images/logo/logo.svg';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const navLinks = [
  {to: '/', label: 'Página inicial'},
  {to: '/', label: 'Adotar'},
  {to: '/', label: 'Como adotar'},
  {to: '/', label: 'Sobre nós'},
]

function Header({variant = 'full'}) {

  return (
    <header className="border bg-white">
      <nav className="flex items-center flex-col md:flex-row md:justify-between max-w-[1200px] p-5 gap-y-3 m-auto">
        <Link to='/' className={`${variant === 'full' ? '' : 'm-auto'}`}>
          <img src={logo} alt="Logo do site Adocão" className="h-[30px] w-auto hover:brightness-125 hover:drop-shadow-lg duration-300"/>
        </Link>
        
        {variant === 'full' && (
          <ul className="text-center flex flex-col md:flex-row md:gap-5 text-primary font-semibold text-lg">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors duration-300 hover:text-accent">{link.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {
  variant: PropTypes.string,
}

export default Header;