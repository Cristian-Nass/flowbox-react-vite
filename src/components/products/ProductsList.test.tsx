import {render, screen} from '@testing-library/react';
import ProductsList from './ProductsList';

it('should have hello world', () => {
  render(<ProductsList />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeVisible();
});
