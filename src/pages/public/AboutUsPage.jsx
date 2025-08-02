import SectionTop from 'components/shared/SectionTop';
import AboutUsSection from "components/shared/AboutUsSection";
import ContactInfoSection from "components/shared/ContactInfoSection";

function AboutUsPage() {
  return (
    <main className="main-container">
      <SectionTop
        title='Sobre nós'
        quote='A ADOCÃO é uma organização sem fins lucrativos que se empenha em encontrar lares para cães em situação de vulnerabilidade. Faça sua parte e adote um novo amigo!'
      />

      <AboutUsSection />
      
      <ContactInfoSection />
    </main>
  );
}

export default AboutUsPage;
