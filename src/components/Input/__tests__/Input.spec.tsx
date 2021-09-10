import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../index';
import { InputTestProps } from '../types';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('should have a value of name and type', () => {
    const fn = jest.fn();
    render(<Input event={fn} placeholder="Place Holderhere" name="test" inputType={'text'} value={'test'} />);
    const input: InputTestProps = screen.getByPlaceholderText(/Place Holderhere/i);
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'test');
  });

  it('should call handleChange function on each key pressed', () => {
    const value = 'o valor';
    const fn = jest.fn();
    render(
      <Input
        event={fn}
        placeholder="Place Holderhere"
        name="test"
        inputType={'text'}
        value={value}
        maxwidth={'22'}
        Mbottom={'2'}
      />,
    );

    const input: InputTestProps = screen.getByPlaceholderText(/Place Holderhere/i);

    userEvent.type(input, value);

    expect(input.value).toBe(value);

    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(
      <Input event={fn} placeholder="Place Holderhere" name="test" inputType={'text'} value={'test'} />,
    );
    expect(container).toMatchSnapshot();
  });
});
