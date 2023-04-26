import { ChangeEvent, useState } from 'react';
import { Card } from './data/cards';

interface DropdownProps {
  cards: Card[];
  onSelectChange: (value: string) => void;
}

function Dropdown({ cards, onSelectChange }: DropdownProps) {
  const [selectValue, setSelectValue] = useState('');

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);
    onSelectChange(value);
  };

  return (
    <div className="dropdown-form">
      <label htmlFor="album-choice" className="album-choice">
        Make a choice:{' '}
      </label>
      <select name="albums" id="album-choice" onChange={selectChangeHandler} required>
        <option value={selectValue}>Choose the album</option>
        <option key={react} value={react}>React.js</option>
        <option key={vue} value={vue}>Vue.js</option>
      </select>
    </div>
  );
}

export default Dropdown;
