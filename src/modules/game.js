import Score from './score.js';
import Service from './service.js';

export default class Game {
  scores = []
  id=''
  api=''
  constructor(){
    this.id = JSON.parse(localStorage.getItem('gameID')) || ''
    this.api = new Service();
  }
  loadGameData= async()=>{
    if(!(this.id.length>0)){
      try{
        const rep = await this.api.createGame("new System Game")
        this.id = rep.result.split(' ')[3]
        localStorage.setItem('gameID',JSON.stringify(this.id))
        this.loadGameData()
      }catch(e){
        console.log('error in game  creation'+e)
      }
       
    }
    else{
      const rep = await this.api.loadGameData(this.id)
      console.log("here is the game id "+this.id)
      this.scores = rep.result
    }
  }
  generateId = () => {
    if(this.scores.length>0){
      return this.scores[this.scores.length - 1].index + 1
    }
    else{
      return 1
    }
    
  }

  add = (name, score) => {
    this.scores.push(new Score(this.generateId(), name, score));
    this.api.addNewScore(this.id,name, score)
  }

  generateContent = () => {
    let content = '';
    this.scores.forEach((score, index) => {
      content += score.renderLi(index);
    });
    return content;
  }
}