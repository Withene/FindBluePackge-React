import { render, screen } from '@testing-library/react';
import { Card } from '../index';
import '@testing-library/jest-dom';

const a = {
  status: 'Objeto em trânsito - por favor aguarde',
  data: '17/08/2021',
  hora: '21:40',
  origem: 'Test',
  destino: 'Unidade de Tratamento - Brasilia-DF',
};
const b = {
  local: 'Unidade de Tratamento - Brasilia-DF',
};

describe('<Posts />', () => {
  it('should render posts With Origem', () => {
    render(<Card FirtsTitleProp={a.status} OrigemProp={a.origem} DestinoProp={a.destino} Time={a.hora} />);
    expect(screen.getByRole('heading', { name: /Destino: Unidade de Tratamento - Brasilia-DF/i })).toBeInTheDocument();
    expect(screen.getByText('Origem: Test')).toBeInTheDocument();
    expect(screen.getByText('Destino: Unidade de Tratamento - Brasilia-DF')).toBeInTheDocument();
    expect(screen.getByText('Horario: 21:40')).toBeInTheDocument();
  });

  it('should render posts With Local', () => {
    render(<Card FirtsTitleProp={a.status} LocalProp={b.local} Time={a.hora} />);
    expect(screen.getByRole('heading', { name: /Local: Unidade de Tratamento - Brasilia-DF/i })).toBeInTheDocument();
    expect(screen.getByText('Horario: 21:40')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Card FirtsTitleProp={a.status} OrigemProp={a.origem} DestinoProp={a.destino} Time={a.hora} />,
    );
    expect(container).toMatchSnapshot();
  });
});
