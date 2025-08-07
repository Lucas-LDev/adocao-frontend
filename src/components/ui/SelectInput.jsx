import PropTypes from 'prop-types';

function SelectInput({ id, label, onChange, value, options = [] }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-primary font-semibold">
        {label}
      </label>

      <select id={id} className="border-2 border-primary p-1 rounded-md text-sm" onChange={onChange} value={value}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default SelectInput;
