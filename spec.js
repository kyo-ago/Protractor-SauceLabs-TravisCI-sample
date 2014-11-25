describe('Protractor-SauceLabs-TravisCI-sample', function() {
  browser.ignoreSynchronization = true;
  it('should get a link', function() {
    browser.get('http://example.local:8000/index.html');
    var links = element.all(by.repeater('a'));
    console.log(links.count());
    expect(links.count()).toEqual(1);
  });
});


