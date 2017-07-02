import { UkrPage } from './app.po';

describe('ukr App', () => {
  let page: UkrPage;

  beforeEach(() => {
    page = new UkrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
