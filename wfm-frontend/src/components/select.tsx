import cs from 'classnames';
import { useState } from 'react';
import SelectArrowSVG from './svg/select-arrow-svg';

export type SelectProps = {
  values: string[];
  selectedValue: string | undefined;
  setSelectedValue: (value: string) => void;
  placeholder: string;
  id: string;
};

export default function Select({ values, selectedValue, setSelectedValue, placeholder, id }: SelectProps): JSX.Element {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={cs('select', { 'select--active': isDropdownOpen, 'select--selected': selectedValue })} id={id}>
      <div onClick={() => setDropdownOpen((prev) => !prev)} className="select__container">
        <div className="select__placeholder">{selectedValue ?? placeholder}</div>
        <div className="select__icon">
          <SelectArrowSVG fill='black' />
        </div>
        <div className="select__dropdown">
          {values.map((value) => (
            <div
              key={value}
              onClick={() => setSelectedValue(value)}
              className={cs('select__option', { 'select__option--selected': value === selectedValue })}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
