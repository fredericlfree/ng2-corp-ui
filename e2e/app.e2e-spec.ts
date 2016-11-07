import { Ng2CorpUiPage } from './app.po';

describe('ng2-corp-ui App', function() {
  let page: Ng2CorpUiPage;

  beforeEach(() => {
    page = new Ng2CorpUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
