import { OCLPage } from './app.po';

describe('ocl App', () => {
  let page: OCLPage;

  beforeEach(() => {
    page = new OCLPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
