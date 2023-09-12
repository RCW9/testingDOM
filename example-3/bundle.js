(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.inputEl = document.querySelector("#message-input");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const newDiv = document.createElement("div");
          newDiv.setAttribute("id", "message");
          newDiv.textContent = this.inputEl.value;
          this.mainContainerEl.append(newDiv);
        }
        hideMessage() {
          const message = document.querySelector("#message");
          message.remove("#message");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
