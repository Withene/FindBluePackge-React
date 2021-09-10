/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Card } from '../Card/index';
export type CardsMapProp = {
  hora: string;
  status: string;
  origem: string;
  destino: string;
  local: string;
  data: string;
};

export function CardsMap({ Result }: any): JSX.Element {
  return Result.map((a: CardsMapProp) => {
    return (
      <Card
        key={a.hora}
        FirtsTitleProp={a.status}
        OrigemProp={a.origem}
        DestinoProp={a.destino}
        Time={a.hora}
        LocalProp={a.local}
        data={a.data}
      />
    );
  });
}
