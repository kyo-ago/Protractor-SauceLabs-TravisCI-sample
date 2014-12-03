describe('Protractor-SauceLabs-TravisCI-sample', function() {
  browser.ignoreSynchronization = true;
  it('should get a link', function() {
    browser.get('http://127.0.0.1:19876/proxy.pac');
    browser.executeScript("var xhr = new XMLHttpRequest();xhr.open('GET', 'http://127.0.0.1:19876/proxy.pac');xhr.onreadystatechange = function () {if (xhr.readyState === 4) alert(xhr.responseText);};xhr.send(null);")
    var links = element.all(by.css('a'));
    expect(links.count()).toEqual(1);
  });
});
