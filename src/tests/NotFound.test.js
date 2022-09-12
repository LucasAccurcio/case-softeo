import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('Verificações na página "Not Found"', () => {
  it('deveria ter um título "Not Found" na página', () => {
    render(<NotFound />, {wrapper: MemoryRouter});

    expect(screen.getByRole('heading', {
      level: 1,
      name: "Not Found"
    })).toBeInTheDocument();
  });
});