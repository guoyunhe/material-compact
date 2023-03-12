import { createCompactTheme } from '.';

describe('<MuiMaterialCompactTheme/>', () => {
  it('render', async () => {
    expect(createCompactTheme({})).toMatchSnapshot();
  });
});
