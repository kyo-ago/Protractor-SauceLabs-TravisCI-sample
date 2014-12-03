describe('Protractor-SauceLabs-TravisCI-sample', function() {
  browser.ignoreSynchronization = true;
  it('should get a link', function() {
    browser.get('http://127.0.0.1:19876/proxy.pac');
    var links = element.all(by.css('a'));
    expect(links.count()).toEqual(1);
  });
});
