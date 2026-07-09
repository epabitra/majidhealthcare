import './FormField.css';

export default function FormField({
  label,
  name,
  type = 'text',
  as = 'input',
  required = false,
  options,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
}) {
  const commonProps = {
    id: name,
    name,
    required,
    value,
    onChange,
    placeholder,
    'aria-invalid': !!error,
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label} {required && <span className="form-field__required">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea {...commonProps} rows={rows} />
      ) : as === 'select' ? (
        <select {...commonProps}>
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...commonProps} type={type} />
      )}
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
