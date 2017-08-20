import { Generala2Page } from './app.po';

describe('generala2 App', () => {
  let page: Generala2Page;

  beforeEach(() => {
    page = new Generala2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
