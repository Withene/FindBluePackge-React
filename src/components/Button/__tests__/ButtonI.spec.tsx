import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../index';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('should render the button with the text "JestTest"', () => {
    const fn = jest.fn();
    render(
      <Button Center={false} Text={'JestTest'} ColorBorder={'rgb(77, 146, 33)'} Name={'JestTests'} eventClick={fn} />,
    );

    const button = screen.getByRole('button', { name: /JestTest/i });

    expect.assertions(1);

    expect(button).toHaveAttribute('name', 'JestTests');
  });
  it('should call function on Button Click', () => {
    const fn = jest.fn();

    render(<Button Center={true} Text={'JestTest'} MBottom={true} Name={'JestTests'} eventClick={fn} />);

    const button = screen.getByRole('button', { name: /JestTest/i });

    expect.assertions(1);

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  /*   it('should be disabled when disabled is true', async () => {
    const fn = jest.fn();
    render(<Button Center={false} Text={'JestTest'} Name={'JestTests'} disabled={true} eventClick={fn} />);
    const button = screen.getByRole('button', { name: /JestTests/i });

    expect(button).toBeDisabled();
  }); */

  it('should match snapshot', () => {
    0;
    const fn = jest.fn();

    const { container } = render(
      <Button Center={false} Text={'JestTest'} Name={'JestTests'} disabled={true} eventClick={fn} />,
    );
    expect(container).toMatchSnapshot();
  });
});
