import { render, screen } from '@testing-library/react';
import { MuiMaterialCompactTheme } from '.';

describe('<MuiMaterialCompactTheme/>', () => {
  it('render', async () => {
    render(<MuiMaterialCompactTheme>Hello</MuiMaterialCompactTheme>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('MuiMaterialCompactTheme');
  });
});
