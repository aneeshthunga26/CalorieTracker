import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calorie tracker', () => {
  render(<App />);
  const linkElement = screen.getByText(/calorie tracker/i);
  expect(linkElement).toBeInTheDocument();
});
