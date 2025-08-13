import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

const ValidatedInput = forwardRef(
  (
    { className, id, label, register, errors, validation = {}, mask, ...props },
    ref
  ) => {
    const InputComponent = mask ? InputMask : 'input';

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className={`${className}`}>
          {label}
        </label>
        <InputComponent
          className={`border-2 text-sm focus:border-primary focus:ring-2 ring-purple-200 duration-300 outline-none rounded-lg p-2 ${
            errors[id]
              ? 'border-red-500 focus:border-red-500 ring-red-200'
              : 'border-gray-200'
          }`}
          id={id}
          ref={ref}
          mask={mask}
          {...props}
          {...register(id, validation)}
        />
        {/* if errors */}
        {errors[id] && (
          <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
        )}
      </div>
    );
  }
);

ValidatedInput.displayName = 'ValidateInput';

ValidatedInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validation: PropTypes.object,
  mask: PropTypes.string,
};

export default ValidatedInput;
