// DropdownMenu.tsx
import React from 'react';

interface DropdownMenuProps {
  options: string[];
  onChange: (option: string) => void;
  disabled?:boolean
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onChange,disabled }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
