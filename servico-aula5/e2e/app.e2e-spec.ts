import { ServicoAula5Page } from './app.po';

describe('servico-aula5 App', function() {
  let page: ServicoAula5Page;

  beforeEach(() => {
    page = new ServicoAula5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
