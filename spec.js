describe('Protractor-SauceLabs-TravisCI-sample', function() {
  browser.ignoreSynchronization = true;
  it('should get a link', function() {
    browser.get('http://example.local:8000/');
    var links = element.all(by.repeater('a'));
    console.log(element.all(by.repeater('body')).get(0).getText());
    expect(links.count()).toEqual(1);
  });
});


