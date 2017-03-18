import { Angular2Aula1Page } from './app.po';

describe('angular2-aula1 App', function() {
  let page: Angular2Aula1Page;

  beforeEach(() => {
    page = new Angular2Aula1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
