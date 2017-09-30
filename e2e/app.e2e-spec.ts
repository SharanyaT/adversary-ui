import { AdversaryUiPage } from './app.po';

describe('adversary-ui App', function() {
  let page: AdversaryUiPage;

  beforeEach(() => {
    page = new AdversaryUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
