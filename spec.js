describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://example.local:8000/index.html');
    var links = element.all(by.repeater('a'));
    expect(links.count()).toEqual(6);
  });
});


