import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FindYour } from '../index';

import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

describe('FindYouPackger', () => {
  it('Should able to Render Find', async () => {
    render(<FindYour />);
    const input = screen.getByPlaceholderText(/Codigo de Rastreio/i);
    expect(input).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Rastreie o seu Pacote' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Como Funciona?' })).toBeInTheDocument();
    expect(screen.getByText('De uma forma fácil e rápida')).toBeInTheDocument();
    await userEvent.type(input, 'LE314514661SE');
    const button = screen.getByRole('button', { name: /Rastrear/i });
    userEvent.click(button);

    await act(async () => {
      const svg = screen.getByAltText('Carregando');
      await waitForElementToBeRemoved(svg);
    });
    screen.debug();
  });

  it('Should not able to Get packge with invalid code', async () => {
    render(<FindYour />);
    const input = screen.getByPlaceholderText(/Codigo de Rastreio/i);
    expect(input).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Rastreie o seu Pacote' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Como Funciona?' })).toBeInTheDocument();
    expect(screen.getByText('De uma forma fácil e rápida')).toBeInTheDocument();
    await userEvent.type(input, 'L5314514661SA');
    const button = screen.getByRole('button', { name: /Rastrear/i });
    userEvent.click(button);

    await waitFor(async () => {
      const svg = screen.getByAltText('Carregando');
      await waitForElementToBeRemoved(svg);
    });
  });
  it('Should not able to Get packge with invalid code', async () => {
    render(<FindYour />);
    const input = screen.getByPlaceholderText(/Codigo de Rastreio/i);
    expect(input).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Rastreie o seu Pacote' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Como Funciona?' })).toBeInTheDocument();
    expect(screen.getByText('De uma forma fácil e rápida')).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /Rastrear/i });
    userEvent.click(button);

    await waitFor(async () => {
      const svg = screen.getByAltText('Carregando');
      await waitForElementToBeRemoved(svg);
    });
  });
});
