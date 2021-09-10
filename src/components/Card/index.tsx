import { Inside, Container, FirtsTitle, SecondTitle, ThereTitle, Timer, FlexItem } from './styled';
import { CardProps } from './types';
export function Card({ FirtsTitleProp, OrigemProp, DestinoProp, Time, LocalProp }: CardProps): JSX.Element {
  return (
    <>
      <Container>
        <Inside>
          <FirtsTitle>{FirtsTitleProp}</FirtsTitle>
          {DestinoProp ? (
            <SecondTitle>Destino: {DestinoProp} </SecondTitle>
          ) : (
            <SecondTitle>Local: {LocalProp} </SecondTitle>
          )}
          <FlexItem>
            {OrigemProp ? (
              <>
                <ThereTitle>Origem: {OrigemProp}</ThereTitle>
                <Timer>Horario: {Time}</Timer>
              </>
            ) : (
              <Timer>Horario: {Time}</Timer>
            )}
          </FlexItem>
        </Inside>
      </Container>
    </>
  );
}
