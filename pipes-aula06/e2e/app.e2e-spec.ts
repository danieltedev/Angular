import { PipesAula06Page } from './app.po';

describe('pipes-aula06 App', function() {
  let page: PipesAula06Page;

  beforeEach(() => {
    page = new PipesAula06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
