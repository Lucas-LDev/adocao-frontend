import PropTypes from 'prop-types';
import ValidatedRadio from "./ValidatedRadio";

function FieldsetRadio({
  name,
  legend,
  options,
  register,
  errors,
  validation = {},
}) {
  return (
    <fieldset className="flex flex-col">
      <legend>{legend}</legend>
      <div className="flex flex-row gap-4 mt-1">
        {options.map((option, index) => (
          <ValidatedRadio
            key={option.value}
            id={`${name}-${option.value}`}
            label={option.label}
            name={name}
            value={option.value}
            register={register}
            validation={
              index === 0 ? validation : {}
            } /* def9ne validation only on the first radio button */
          />
        ))}
      </div>

      {/* if errosr */}
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </fieldset>
  );
}

FieldsetRadio.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validation: PropTypes.object,
};

export default FieldsetRadio;
