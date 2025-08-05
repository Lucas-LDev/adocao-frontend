import SectionTop from 'components/shared/SectionTop';
import AboutUsSection from 'components/shared/AboutUsSection';
import ContactInfoDiv from 'components/shared/ContactInfoDiv';

function AboutUsPage() {
  return (
    <main className="main-container">
      <SectionTop
        title="Sobre nós"
        quote="A ADOCÃO é uma organização sem fins lucrativos que se empenha em encontrar lares para cães em situação de vulnerabilidade. Faça sua parte e adote um novo amigo!"
      />

      <AboutUsSection />

      <section className="max-w-[1000px] m-auto p-3 lg:p-0 w-full">
        <ContactInfoDiv />
      </section>
    </main>
  );
}

export default AboutUsPage;
