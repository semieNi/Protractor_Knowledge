browser.ignoreSynchronization = true;

var helper = require("./helper");

describe("Logos", function () {
  it("Should have the blog logo", function () {
    browser.get("https://blog.taller.net.br/");
    helper.verifyElementPresenceByAlt("blog_Logo");
  });

  it("Should have the website logo", function () {
    browser.get("https://www.taller.net.br/");
    helper.verifyElementPresenceByClass("webLogo");
  });
});
