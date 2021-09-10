import { render, screen } from '@testing-library/react';
import { CardsMap } from '../index';

import '@testing-library/jest-dom';

const Mock = [
  {
    status: 'Objeto em trânsito - por favor aguarde',
    data: '17/08/2021',
    hora: '11:00',
    origem: 'Test',
    destino: 'Unidade de Tratamento - Brasilia-DF',
  },
];
describe('<CardsMap />', () => {
  it('should render posts', () => {
    render(<CardsMap Result={Mock} />);
    expect(screen.getByRole('heading', { name: 'Origem: Test' })).toBeInTheDocument();
    expect(screen.getByText('Destino: Unidade de Tratamento - Brasilia-DF')).toBeInTheDocument();
    expect(screen.getByText('Objeto em trânsito - por favor aguarde')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(<CardsMap Result={Mock} />);
    expect(container).toMatchSnapshot();
  });
});
