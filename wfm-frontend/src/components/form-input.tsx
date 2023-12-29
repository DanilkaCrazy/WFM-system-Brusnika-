export type FormInputProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  id: string;
};

export default function FormInput({ value, setValue, placeholder, id }: FormInputProps): JSX.Element {
  return (
    <div className="signup__input-group">
      <label className="signup__label" htmlFor={id}>{placeholder}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="signup__input"
        type={id}
        placeholder={placeholder}
        name={id}
        id={id}
      />
    </div>
  );
}
