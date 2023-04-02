import Checkbox from './components/Checkbox';
import { render, screen } from '@testing-library/react';
import DateInput from './components/DateInput';
import FileUpload from './components/FileUpload';
import Dropdown from './components/Dropdown';
import { cards } from './components/data/cards';

function generateCheckboxTestProps(checkBoxValue: string[]) {
  return checkBoxValue;
}

function generateDateTestProps(date: string) {
  return date;
}

describe('Imported forms render', () => {
  it('Checkbox render', () => {
    const mockCheckboxChange = jest.fn();
    const testValue: string[] = generateCheckboxTestProps(['alternative metal', 'metalcore']);
    render(
      <Checkbox
        onCheckboxChange={(values) => mockCheckboxChange(values)}
        checkedValues={testValue}
      />
    );
    const checkbox = screen.getByText('Choose the genres:');
    expect(checkbox).toBeInTheDocument;
    const variantOne = screen.getByRole('checkbox', { name: 'metalcore' });
    expect(variantOne.getAttribute('value')).toBe('metalcore');
    const variantTwo = screen.getByRole('checkbox', { name: 'alternative metal' });
    expect(variantTwo.getAttribute('value')).toBe('alternative metal');
  });

  it('DateInput render', () => {
    const mockDateChange = jest.fn();
    const testValue: string = generateDateTestProps('02.04.2023');
    render(<DateInput onDateChange={(value) => mockDateChange(value)} dateChoice={testValue} />);
    const dateInput = screen.getByText('Choose the release date:');
    expect(dateInput).toBeInTheDocument;
  });

  it('Dropdown render', () => {
    const mockDropdownChange = jest.fn();
    render(<Dropdown cards={cards} onSelectChange={(card) => mockDropdownChange(card)} />);
    const dropdown = screen.getByText('Choose the album, the song belongs to:');
    expect(dropdown).toBeInTheDocument;
  });

  it('FileUpload render', () => {
    const mockFileChange = jest.fn();
    render(<FileUpload onFileChange={mockFileChange} />);
    const fileUpload = screen.getByText('Choose an album/single cover:');
    expect(fileUpload).toBeInTheDocument;
  });
});
