import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('Verificações na página "Home"', () => {
  it('deveria ter um título "Olá, Dra. Érica!" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    expect(screen.getByText(/Olá, Dra. Érica!/i)).toBeInTheDocument();
  });

  it('deveria ter um botão "Cadastrar serviço" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    expect(screen.getByRole('button', { name: /Cadastrar serviço/i })).toBeInTheDocument();  
  });

  it('deveria ter um botão "Gerar relatório" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    expect(screen.getByRole('button', { name: /Gerar relatório/i })).toBeInTheDocument();  
  });


});