import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('Verificações da existência dos campos na página "Serviço"', () => {
  it('deveria ter um título "Serviço" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByText(/Serviços/i)).toBeInTheDocument();
  });

  it('deveria ter um botão "Cadastrar Serviço" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByRole('button', { name: /Cadastrar Serviço/i })).toBeInTheDocument();  
  });

  it('deveria ter um botão "Voltar" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByTestId('back-button')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Nome completo do paciente:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Nome completo do paciente:')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Tratamento realizado:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Tratamento realizado:')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Valor do tratamento realizado:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Valor do tratamento realizado:')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Método de pagamento:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Método de pagamento:')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Forma de pagamento:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Forma de pagamento:')).toBeInTheDocument();  
  });

  it('deveria ter um campo "Data de pagamento:" na página', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    expect(screen.getByLabelText('Data de pagamento:')).toBeInTheDocument();  
  });
});

describe('Verifica ao preencher os dados na página "Serviço"', () => {
  it('deveria habilitar o botão de cadastrar serviço ao preencher todos os dados', () => {
    render(<App />, {wrapper: MemoryRouter});

    const serviceButton = screen.getByRole('button', { name: /Cadastrar serviço/i });
    userEvent.click(serviceButton);

    const nameInput = screen.getByLabelText('Nome completo do paciente:');
    userEvent.type(nameInput, 'Lucas Accurcio');
    
    const treatmentInput = screen.getByLabelText('Tratamento realizado:');
    userEvent.type(treatmentInput, 'Limpeza');

    const valueInput = screen.getByLabelText('Valor do tratamento realizado:');
    userEvent.type(valueInput, '100');

    const paymentMethodInput = screen.getByLabelText('Método de pagamento:');
    userEvent.type(paymentMethodInput, 'Dinheiro');

    const paymentFormInput = screen.getByLabelText('Forma de pagamento:');
    userEvent.type(paymentFormInput, 'À vista');

    const paymentDateInput = screen.getByLabelText('Data de pagamento:');
    userEvent.type(paymentDateInput, '2022-09-12');

    const submitButton = screen.getByRole('button', { name: /Cadastrar Serviço/i });

    expect(submitButton).toBeDisabled();

    userEvent.click(submitButton);
  });
});
