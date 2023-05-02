// import {render, screen} from '@testing-library/react';
// import App from './App';

// it('should have hello world', () => {
//   render(<App />);
//   const message = screen.queryByText(/Hello World/i);
//   expect(message).toBeVisible();
// });

import {describe, it, expect} from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
