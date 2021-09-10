import { Label, Inpu, Container } from './styled';
import { InputProp } from './types';

export function Input({
  Text,
  inputType,
  event,
  eventBlur,
  value,
  placeholder,
  name,
  maxwidth,
  id,
  Mbottom,
}: InputProp): JSX.Element {
  return (
    <>
      <Container maxwidth={maxwidth} Mbottom={Mbottom}>
        <Label>{Text}</Label>
        <Inpu
          onChange={event}
          onBlur={eventBlur}
          type={inputType}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
        />
      </Container>
    </>
  );
}
