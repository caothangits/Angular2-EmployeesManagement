import { Angular2EmployessManagementJSONPage } from './app.po';

describe('angular2-employess-management-json App', function() {
  let page: Angular2EmployessManagementJSONPage;

  beforeEach(() => {
    page = new Angular2EmployessManagementJSONPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
