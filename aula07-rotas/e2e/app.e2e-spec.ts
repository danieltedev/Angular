import { Aula07RotasPage } from './app.po';

describe('aula07-rotas App', function() {
  let page: Aula07RotasPage;

  beforeEach(() => {
    page = new Aula07RotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
