import SectionTop from 'components/shared/SectionTop';
import PetListContainer from 'components/shared/PetListContainer';
import PetFilter from 'components/shared/PetFilter';
import { useSearchParams } from 'react-router-dom';

function AdoptPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const apiFilters = {
    sex: searchParams.get('sex'),
    ageRange: searchParams.get('ageRange'),
    size: searchParams.get('size'),
  };

  for (const key in apiFilters) {
    if (!apiFilters[key]) {
      delete apiFilters[key];
    }
  }

  return (
    <main className="main-container">
      <SectionTop
        title="Adote um novo amigo"
        quote="Ajude a fazer o bem e, em troca, leve para casa um novo melhor amigo."
      />

      <section className="px-4">
        <div className="grid grid-flow-row lg:grid-cols-[250px_1fr] justify-center w-full max-w-[1200px] mx-auto gap-8">
          <PetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />

          <PetListContainer filters={apiFilters} />
        </div>
      </section>
    </main>
  );
}

export default AdoptPage;
