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

  it("Should navigate to the first blog post", function () {
    var title = $(".tag-domain-driven-design.tag-eventstorming .entry-title a"),
      image = $(".tag-domain-driven-design.tag-eventstorming .wp-post-image"),
      titleInsidePost = $(".h2 a"),
      mainContainer = $(".post-content__text");

    //I used ".Then" in this case, because the "browser.get" it's a promise.
    browser.get("https://blog.taller.net.br/").then(function () {
      expect(title.isDisplayed()).toBeTruthy();
      expect(image.isDisplayed()).toBeTruthy();

      title.click();

      expect(titleInsidePost.isDisplayed()).toBeTruthy();
      expect(image.isPresent()).toBe(true);
      expect(mainContainer.getText()).toContain("Guia essencial");
    });
  });
});
