import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Page404 } from '../index';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('FindYouPackger', () => {
  it('Should able to Render Find', async () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>,
    );
    expect(screen.getByAltText('Logo FindBluePackge')).toBeInTheDocument();
    expect(screen.getByAltText('PageNoutFound')).toHaveAttribute('src', '404Page.svg');
    expect(screen.getByAltText('PageNoutFound')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
