import { render } from '@testing-library/react';

import Sidenav from '#lib/sidenav.js';

describe('Sidenav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sidenav />);
    expect(baseElement).toBeTruthy();
  });
});
