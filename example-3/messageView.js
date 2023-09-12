class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button')
    this.inputEl = document.querySelector('#message-input');
    this.buttonEl.addEventListener('click', () => {
        this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
        this.hideMessage();
    })
  }

  displayMessage() {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("id", "message")
    newDiv.textContent = this.inputEl.value
    this.mainContainerEl.append(newDiv)
  }
  hideMessage(){
    const message = document.querySelector('#message')
    message.remove('#message')


  }

  
}

module.exports = MessageView;