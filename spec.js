browser.ignoreSynchronization = true;

describe("Hello World", function () {
  it("Should have a logo", function () {
    browser.get("https://blog.taller.net.br/");
    var sourceImage = element(by.css('img[alt="Taller"]'));

    expect(sourceImage.isDisplayed()).toBeTruthy();
  });
});
