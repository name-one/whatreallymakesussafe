import { MelaniePage } from './app.po';

describe('melanie App', function() {
  let page: MelaniePage;

  beforeEach(() => {
    page = new MelaniePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
