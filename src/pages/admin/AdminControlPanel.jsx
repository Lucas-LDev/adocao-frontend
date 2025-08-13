import Button from 'components/ui/Button';
import SectionTitle from 'components/ui/SectionTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCirclePlus,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const adminOptions = [
  {
    icon: faCirclePlus,
    title: 'Criar Pet',
    description: 'Adicione um novo pet ao centro de adoção.',
    label: 'Criar Pet',
    to: '',
  },
  {
    icon: faPen,
    title: 'Editar Pet',
    description: 'Encontre um pet já cadastrado para editar suas informações.',
    label: 'Editar Pet',
    to: '',
  },
  {
    icon: faCheckCircle,
    title: 'Gerenciar Status de Adoção',
    description:
      'Marque um pet como adotado ou torne-o disponível para adoção novamente.',
    label: 'Gerenciar status',
    to: '',
  },
  {
    icon: faTrash,
    title: 'Remover Pet',
    description:
      'Remova permanentemente um pet do sistema. Esta ação é irreversível.',
    label: 'Remover Pet',
    to: '',
  },
];

function AdminControlPanel() {
  return (
    <main className="main-container-admin">
      <section className="section-flex-admin">
        <div className="flex flex-col items-center bg-white shadow rounded-xl p-7 lg:p-10">
          <SectionTitle title="Olá, Admin. O que você gostaria de fazer?" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {adminOptions.map((option) => (
              <div
                key={option.title}
                className="border-2 rounded-xl flex flex-col p-4 items-center text-center gap-7 bg-white hover:bg-purple-400 duration-300 hover:shadow"
              >
                <div className="h-20 w-20 p-2 bg-secondary flex items-center justify-center rounded-full border">
                  <FontAwesomeIcon
                    icon={option.icon}
                    className="text-4xl text-primary"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{option.title}</h3>
                  <p>{option.description}</p>
                </div>
                <Button
                  text={option.label}
                  className={'w-full'}
                  to={option.to}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminControlPanel;
