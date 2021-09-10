import { Inside, Container, FirtsTitle, SecondTitle, ThereTitle, Timers, Timer, FlexItem, Data } from './styled';
import { CardProps } from './types';
export function Card({ FirtsTitleProp, OrigemProp, DestinoProp, Time, LocalProp, data }: CardProps): JSX.Element {
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
            {OrigemProp && <ThereTitle>Origem: {OrigemProp}</ThereTitle>}
            <Timers>
              <Data> Data: {data} </Data>
              <Timer>Horario: {Time}</Timer>
            </Timers>
          </FlexItem>
        </Inside>
      </Container>
    </>
  );
}
