import { OntrackBudgetPage } from './app.po';

describe('ontrack-budget App', function() {
  let page: OntrackBudgetPage;

  beforeEach(() => {
    page = new OntrackBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
