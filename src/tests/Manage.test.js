import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('Verificações da existência dos campos na página "Gerenciamento"', () => {
  it('deveria ter um título "Gerenciamento" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const manageButton = screen.getByRole('button', { name: /Gerenciar serviços/i });
    userEvent.click(manageButton);

    expect(screen.getByText(/Gerenciamento/i)).toBeInTheDocument();
  });

  it('deveria ter um formulário na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const manageButton = screen.getByRole('button', { name: /Gerenciar serviços/i });
    userEvent.click(manageButton);

    expect(screen.getByLabelText(/Nome do Paciente:/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Tratamento:")).toBeInTheDocument();
    expect(screen.getByLabelText("Valor Tratamento:")).toBeInTheDocument();
  });

  it('deveria receber a mensagem de nenhum serviço cadastrado', () => {
    render(<App />, {wrapper: MemoryRouter});

    const manageButton = screen.getByRole('button', { name: /Gerenciar serviços/i });
    userEvent.click(manageButton);

    expect(screen.getByText(/Nenhum serviço cadastrado/i)).toBeInTheDocument();  
  });
});
