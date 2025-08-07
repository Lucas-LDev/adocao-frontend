import { useState, useEffect } from 'react';
import Button from 'components/ui/Button';
import SelectInput from 'components/ui/SelectInput';
import SectionTitle from 'components/ui/SectionTitle';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const optionsSex = [
  { value: 'todos', label: 'Todos' },
  { value: 'FEMALE', label: 'Fêmea' },
  { value: 'MALE', label: 'Macho' },
];

const optionsAgeRange = [
  { value: 'todos', label: 'Todos' },
  { value: 'PUPPY', label: 'Filhote (Abaixo de 1 ano)' },
  { value: 'YOUNG', label: 'Jovem (1 a 3 anos)' },
  { value: 'ADULT', label: 'Adulto (Acima de 3 anos)' },
];

const optionsSize = [
  { value: 'todos', label: 'Todos' },
  { value: 'SMALL', label: 'Pequeno (Até 8 kg)' },
  { value: 'MEDIUM', label: 'Médio (9kg a 20kg)' },
  { value: 'LARGE', label: 'Grande (Acima de 21kg)' },
];

function PetFilter({ searchParams, setSearchParams }) {
  const [filters, setFilters] = useState({
    sex: searchParams.get('sex') || 'todos',
    ageRange: searchParams.get('ageRange') || 'todos',
    size: searchParams.get('size') || 'todos',
  });

  function handleClearFilters() {
    setFilters({ sex: 'todos', ageRange: 'todos', size: 'todos' });
    setSearchParams({});
  }

  function handleApplyFilters() {
    const params = {};
    if (filters.sex !== 'todos') params.sex = filters.sex;
    if (filters.ageRange !== 'todos') params.ageRange = filters.ageRange;
    if (filters.size !== 'todos') params.size = filters.size;

    setSearchParams(params, { replace: true });
  }

  useEffect(() => {
    setFilters({
      sex: searchParams.get('sex') || 'todos',
      ageRange: searchParams.get('ageRange') || 'todos',
      size: searchParams.get('size') || 'todos',
    });
  }, [searchParams]);

  return (
    <div>
      <div className="bg-white p-4 rounded-2xl flex flex-col gap-4 shadow w-full md:max-w-[450px] lg:max-w-none md:m-auto">
        <SectionTitle title="Filtros" icon={faFilter} />
        <SelectInput
          id="sexo"
          label="Sexo:"
          value={filters.sex}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sex: e.target.value }))
          }
          options={optionsSex}
        />
        <SelectInput
          id="faixaEtaria"
          label="Faixa etária:"
          value={filters.ageRange}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, ageRange: e.target.value }))
          }
          options={optionsAgeRange}
        />
        <SelectInput
          id="porte"
          label="Porte:"
          value={filters.size}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, size: e.target.value }))
          }
          options={optionsSize}
        />
        <div className="flex flex-col gap-4 mt-4">
          <Button
            text="Apagar"
            className="shadow-md w-full"
            onClick={handleClearFilters}
          />
          <Button
            text="Filtrar"
            className="shadow-md w-full"
            onClick={handleApplyFilters}
          />
        </div>
      </div>
    </div>
  );
}

PetFilter.propTypes = {
  searchParams: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default PetFilter;
