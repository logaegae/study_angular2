import { StudyAngular2Page } from './app.po';

describe('study-angular2 App', () => {
  let page: StudyAngular2Page;

  beforeEach(() => {
    page = new StudyAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
