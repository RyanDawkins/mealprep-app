import { MealprepAppPage } from './app.po';

describe('mealprep-app App', () => {
  let page: MealprepAppPage;

  beforeEach(() => {
    page = new MealprepAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
