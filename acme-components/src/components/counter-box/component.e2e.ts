import { newE2EPage } from '@stencil/core/testing';

describe('counter-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<counter-box></counter-box>');

    const element = await page.find('counter-box');
    expect(element).toHaveClass('hydrated');
  });
});
