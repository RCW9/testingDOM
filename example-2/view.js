class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text){
    const body = document.querySelector('body')
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text
    body.append(newParagraph)

  }

  clearParagraphs(){
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach((paragraph)=>{
      paragraph.remove()
    })
  }
}

module.exports = View;