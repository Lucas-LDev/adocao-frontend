import SectionTitle from "components/ui/SectionTitle";
import AdminPetList from "components/shared/AdminPetList";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeletePetPage() {
  return (
    <main className="main-container-admin">
      <section className="section-flex mt-10">
        <SectionTitle title="Deletar pets do sistema" icon={faTrash} />
        <AdminPetList variant="delete" />
      </section>
    </main>
  );
}
