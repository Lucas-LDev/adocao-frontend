import PropTypes from 'prop-types';

export default function ValidatedSelect({id, label, options = [], errors, validation, register}) {
  return (
    <div className="flex flex-col gap-1">
      <label 
        htmlFor={id} 
        className="text-primary font-semibold">
          {label}
      </label>

      <select 
        id={id} 
        className={`border-2 text-sm focus:border-primary focus:ring-2 ring-purple-200 duration-300 outline-none rounded-lg p-2 ${errors[id] ? "border-red-500 focus:border-red-500 ring-red-200" : "border-gray-200"}`}
        {...register(id, validation)}
      >
        {options.map(option => (
          <option key={option.vaalue} value={option.value}>{option.label}</option>
        ))}
      </select>
        {errors[id] && (
          <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
        )}
    </div>
  );
}

ValidatedSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  errors: PropTypes.object.isRequired,
  validation: PropTypes.object,
  register: PropTypes.func.isRequired,
};