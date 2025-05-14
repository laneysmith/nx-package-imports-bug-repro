import { render } from '@testing-library/react';

import Mylib from '#lib/mylib.js';

describe('Mylib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylib />);
    expect(baseElement).toBeTruthy();
  });
});
