(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph(text) {
          const body = document.querySelector("body");
          const newParagraph = document.createElement("p");
          newParagraph.textContent = text;
          body.append(newParagraph);
        }
        clearParagraphs() {
          const paragraphs = document.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            paragraph.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph("This is a new paragraph");
})();
