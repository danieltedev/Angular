import { DiretivasAula4Page } from './app.po';

describe('diretivas-aula4 App', function() {
  let page: DiretivasAula4Page;

  beforeEach(() => {
    page = new DiretivasAula4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
