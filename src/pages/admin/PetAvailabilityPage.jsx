import SectionTitle from 'components/ui/SectionTitle';
import AdminPetList from 'components/shared/AdminPetList';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

export default function PetAvailabilityPage() {
  return (
    <main className="main-container-admin">
      <section className="section-flex mt-10">
        <SectionTitle
          title="Alterar disponibilidade do pet"
          icon={faToggleOn}
        />
        <AdminPetList variant="availability" />
      </section>
    </main>
  );
}