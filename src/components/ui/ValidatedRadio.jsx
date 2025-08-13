import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const ValidatedRadio = forwardRef(
  ({id, name, value, label, register, validation = {}}, ref) => {
    return (
      <div className="flex flex-row gap-1 items-baseline">
        <input 
          className="form-radio text-primary focus:ring-0 focus:ring-offset-0 focus:outline-none"
          type="radio" 
          id={id}
          value={value}

          ref={ref}
          {...register(name, validation)}
        />
        <label className="font-normal cursor-pointer"
          htmlFor={id}
        > {label}
        </label>
      </div>
    );
  }
);

ValidatedRadio.displayName = 'ValidatedRadio';

ValidatedRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object
}

export default ValidatedRadio;