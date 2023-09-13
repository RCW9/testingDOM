class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');
    this.repoNameEl = document.querySelector('#repo-name');
    this.repoDescriptionEl = document.querySelector("#repo-description");
    this.bodyEl= document.querySelector('body');
    

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);

      this.display(repoData)
      });
    });
  }

  display(gitData) {
    const newNameDiv = document.createElement("div");
    newNameDiv.textContent = gitData.name;
    this.repoNameEl.append(newNameDiv);
    const newDesDiv = document.createElement("div");
    newDesDiv.textContent = gitData.description
    this.repoDescriptionEl.append(newDesDiv)
    const img = document.createElement("img");
    img.src = gitData.organization.avatar_url;
    document.body.appendChild(img);
  }
}

module.exports = GithubView;