import Score from './score.js';

export default class Game {
  scores = []

  generateId = () => this.scores[this.scores.length - 1].index + 1

  add = (name, score) => {
    this.scores.push(new Score(this.generateId(), name, score));
  }

  generateContent = () => {
    let content = '';
    this.scores.forEach((score, index) => {
      content += score.renderLi(index);
    });
    return content;
  }
}