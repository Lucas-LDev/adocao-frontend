import SectionTitle from "components/ui/SectionTitle";
import PetListContainer from "components/shared/PetListContainer";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdatePetPage() {
  return (
    <main className="main-container-admin">
      <section className="section-flex mt-10">
        <SectionTitle title="Editar pets do sistema" icon={faEdit} />
        <PetListContainer variant="edit" />
      </section>
    </main>
  );
}
