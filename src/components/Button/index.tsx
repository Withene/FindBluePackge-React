import { ButtonStyle } from './styled';
import { ButtonProp } from './types';

export function Button({
  MBottom,
  Text,
  ColorBorder,
  Center,
  eventClick,
  type,
  disabled,
  Name,
}: ButtonProp): JSX.Element {
  return (
    <>
      <ButtonStyle
        BorderColor={ColorBorder}
        name={Name}
        Center={Center}
        disabled={disabled}
        onClick={eventClick}
        type={type}
        MBottom={MBottom}
      >
        {Text}
      </ButtonStyle>
    </>
  );
}
