import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';


describe('Verificações da existência dos campos na página "Relatórios"', () => {
  it('deveria ter um título "Relatórios" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const reportButton = screen.getByRole('button', { name: /Gerar relatório/i });
    userEvent.click(reportButton);

    expect(screen.getByText(/Relatórios/i)).toBeInTheDocument();
  });

  it('deveria ter um campo "Data de início:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const reportButton = screen.getByRole('button', { name: /Gerar relatório/i });
    userEvent.click(reportButton);

    expect(screen.getByText(/Data de início:/i)).toBeInTheDocument();  
  });

  it('deveria ter um campo "Data final:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const reportButton = screen.getByRole('button', { name: /Gerar relatório/i });
    userEvent.click(reportButton);

    expect(screen.getByText(/Data final:/i)).toBeInTheDocument();  
  });

  it('deveria ter um botão "Filtrar" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const reportButton = screen.getByRole('button', { name: /Gerar relatório/i });
    userEvent.click(reportButton);

    expect(screen.getByRole('button', { name: /Filtrar/i })).toBeInTheDocument();  
  });

  it('deveria receber a mensagem de nenhum dado encontrado', () => {
    render(<App />, {wrapper: MemoryRouter});

    const reportButton = screen.getByRole('button', { name: /Gerar relatório/i });
    userEvent.click(reportButton);

    expect(screen.getByText(/Nenhum dado encontrado/i)).toBeInTheDocument();  
  });
});