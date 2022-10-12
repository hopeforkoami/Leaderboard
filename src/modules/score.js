export default class Score {
  constructor(id, nom, nbre) {
    this.name = nom;
    this.score = nbre;
    this.index = id;
  }

  renderLi = (id) => (`<li class="scoreList_content_element ${id % 2 > 0 ? 'odd' : 'peer'} "> ${this.name} : ${this.score}  </li>`)
}