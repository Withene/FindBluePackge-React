import { render, screen } from '@testing-library/react';
import { Footer } from '../index';

import '@testing-library/jest-dom';

describe('<Footer />', () => {
  it('should render Footer', () => {
    render(<Footer />);
    expect(screen.getByAltText('Imagem do Footer')).toBeInTheDocument();
    expect(screen.getByAltText('Imagem do Footer')).toHaveAttribute('src', 'test.svg');
  });

  it('should match snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
