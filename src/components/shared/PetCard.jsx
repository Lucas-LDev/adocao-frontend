import { SEXO_MAP, FAIXA_ETARIA_MAP, PORTE_MAP } from 'utils/mappings';
import PropTypes from 'prop-types';
import Button from 'components/ui/Button';

function PetCard({ pet }) {
  //pet mappings
  const sexDisplay = SEXO_MAP[pet.sex] || pet.sex;
  const ageRangeDisplay = FAIXA_ETARIA_MAP[pet.ageRange] || pet.ageRange;
  const sizeDisplay = PORTE_MAP[pet.size] || pet.size;

  return (
    <div className="rounded-2xl overflow-hidden max-w-[300px] text-center bg-white shadow hover:bg-secondary hover:shadow-md duration-300">
      <div>
        <img
          src={pet.imgUrl}
          alt={`Foto do animal: ${pet.name}, sexo: ${sexDisplay}, faixa etária: ${ageRangeDisplay}, porte: ${sizeDisplay}`}
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-xl text-primary">{pet.name}</h3>
        <p className="text-sm text-purple-500">Disponível para adoção</p>

        <div className="grid grid-cols-3 my-6 gap-2">
          <div className="py-2 flex flex-col bg-purple-50 rounded-xl text-sm">
            <span className="text-purple-600 font-medium">Sexo</span>
            <span className="text-zinc-900">{sexDisplay}</span>
          </div>
          <div className="p-2 flex flex-col bg-red-50 rounded-xl text-sm">
            <span className="text-fuchsia-600 font-medium">Idade</span>
            <span className="text-zinc-900">{ageRangeDisplay}</span>
          </div>
          <div className="p-2 flex flex-col bg-yellow-50 rounded-xl text-sm">
            <span className="text-yellow-600 font-medium">Porte</span>
            <span className="text-zinc-900">{sizeDisplay}</span>
          </div>
        </div>

        <Button text={'Adotar'} className={'w-full mt-auto'} />
      </div>
    </div>
  );
}

PetCard.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    ageRange: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetCard;
