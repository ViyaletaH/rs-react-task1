import { Component, ChangeEvent } from 'react';
import { Card } from './data/cards';

interface DropdownProps {
  cards: Card[];
  onSelectChange: (value: string) => void;
}

interface DropdownState {
  selectValue: string;
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      selectValue: '',
    };
  }

  selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    this.setState({ selectValue: value }, () => {
      this.props.onSelectChange(value);
    });
  };

  render() {
    const { cards } = this.props;
    return (
      <div>
        <label htmlFor="album-choice">Choose the album, the song belongs to:</label>
        <select name="albums" id="album-choice" onChange={this.selectChangeHandler} required>
          <option value="">Choose the album</option>
          {cards.map((card: Card) => (
            <option key={card.cardId} value={card.name}>
              {card.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
