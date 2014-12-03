describe('Protractor-SauceLabs-TravisCI-sample', function() {
  browser.ignoreSynchronization = true;
  it('should get a link', function() {
    browser.get('http://localhost:8087/');
    var links = element.all(by.css('a'));
    expect(links.count()).toEqual(1);
  });
});
