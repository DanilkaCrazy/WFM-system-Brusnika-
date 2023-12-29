import Select from './select';

export type FormSelectProps = {
  values: string[];
  selectedValue?: string;
  setSelectedValue: (value: string) => void;
  placeholder: string;
  id: string;
};

export default function FormSelect({ values, selectedValue, setSelectedValue, placeholder, id }: FormSelectProps): JSX.Element {
  return (
    <div className="signup__input-group">
      <label className="signup__label" htmlFor={id}>{placeholder}</label>
      <Select
        values={values}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
