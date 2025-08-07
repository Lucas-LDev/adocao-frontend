import SectionTop from 'components/shared/SectionTop';
import AwarenessSection from 'components/shared/AwarenessSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PetListContainer from "components/shared/PetListContainer";
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <main className="main-container">
      <SectionTop>
        <h2 className="text-title uppercase">
          Seu novo melhor amigo está te esperando. <br />
          <span className="text-accent">Adote!</span>
        </h2>
        <a href="#cards">
          <FontAwesomeIcon
            icon={faCircleDown}
            className="text-4xl text-white animate-bounce duration-700 hover:text-accent"
          />
        </a>
      </SectionTop>

      <section className="section-flex">
        <PetListContainer limit={3} showViewAllButton={true} />
      </section>
      

      <AwarenessSection />

    </main>
  );
}

export default HomePage;
