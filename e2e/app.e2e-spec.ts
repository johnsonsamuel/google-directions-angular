import { GoogleProjectPage } from './app.po';

describe('google-project App', () => {
  let page: GoogleProjectPage;

  beforeEach(() => {
    page = new GoogleProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
