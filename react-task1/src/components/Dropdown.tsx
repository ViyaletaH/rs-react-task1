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
    <div>
      <label htmlFor="album-choice">Choose the album, the song belongs to:</label>
      <select name="albums" id="album-choice" onChange={selectChangeHandler} required>
        <option value={selectValue}>Choose the album</option>
        {cards.map((card: Card) => (
          <option key={card.cardId} value={card.name}>
            {card.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
