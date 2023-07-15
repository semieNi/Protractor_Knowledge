// helper.js

module.exports = {
  verifyElementPresenceByAlt: function (alt) {
    var blog_Logo = element(by.css('img[alt="Taller"]'));
    expect(blog_Logo.isDisplayed()).toBeTruthy();
  },

  verifyElementPresenceByClass: function (classe) {
    var webLogo = $(".navbar2_logo");
    expect(webLogo.isDisplayed()).toBeTruthy();
  },
};
