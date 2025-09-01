import SectionTitle from "components/ui/SectionTitle";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AdminPetList from "components/shared/AdminPetList";

export default function UpdatePetPage() {
  return (
    <main className="main-container-admin">
      <section className="section-flex mt-10">
        <SectionTitle title="Editar pets do sistema" icon={faEdit} />
        <AdminPetList variant="edit" />
      </section>
    </main>
  );
}
