import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const browseButton = screen.getByRole('button', { name: /browse projects/i });
  expect(browseButton).toBeInTheDocument();
});
