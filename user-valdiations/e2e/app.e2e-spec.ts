import { UserValdiationsPage } from './app.po';

describe('user-valdiations App', () => {
  let page: UserValdiationsPage;

  beforeEach(() => {
    page = new UserValdiationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
