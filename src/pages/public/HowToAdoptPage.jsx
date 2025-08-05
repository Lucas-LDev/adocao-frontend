import SectionTop from 'components/shared/SectionTop';
import RequirementsSection from 'components/shared/RequirementsSection';
import AdoptionProcessSection from 'components/shared/AdoptionProcessSection';
import ContactInfoDiv from 'components/shared/ContactInfoDiv';

function HowToAdoptPage() {
  return (
    <main className="main-container">
      <SectionTop
        title="Processo de adoção"
        quote="ADOCÃO é um projeto solidário que tem como objetivo tirar cães das ruas e de abrigos e achar um novo lar agradável à eles. Nosso projeto busca conscientizar as pessoas do porquê o processo de adoção é fácil e rápido. Para isso, preparamos uma seção explicativa de como funciona o processo de adoção e como você pode fazer para ter um novo amigo ao seu lado."
      />

      <RequirementsSection />

      <AdoptionProcessSection />

      <section className="max-w-[1000px] m-auto p-3 lg:p-0 w-full">
        <ContactInfoDiv />
      </section>
    </main>
  );
}

export default HowToAdoptPage;
