import SectionTop from 'components/shared/SectionTop';
import AwarenessSection from 'components/shared/AwarenessSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PetListContainer from 'components/shared/PetListContainer';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <main className="main-container">
      <SectionTop>
        <h2 className="text-title uppercase">
          Seu novo melhor amigo está te esperando. <br />
          <span className="text-accent flex items-center justify-center gap-2">
            Adote!
            <FontAwesomeIcon icon={faHeart} className="text-3xl text-accent" />
          </span>
        </h2>
      </SectionTop>

      <section className="section-flex">
        <PetListContainer
          limit={3}
          showViewAllButton={true}
          variant="display"
        />
      </section>

      <AwarenessSection />
    </main>
  );
}

export default HomePage;
