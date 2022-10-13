import _ from 'lodash'; // eslint-disable-line
import Game from './modules/game.js';
import './style.css';

const game = new Game()
const scoreList = document.querySelector('.score_list_content')
const refreshButton = document.querySelector('.refresh_button')
const addButton = document.querySelector('.submit_button')
const userName = document.querySelector('.form_name')
const userScore = document.querySelector('.form_score')


const refreshScoresList = ()=>{
  game.loadGameData().then((response)=>{
    scoreList.innerHTML=""
    scoreList.innerHTML = response
    console.log(game.scores)
  })
}

const addScore = ()=>{

  if(!isNaN(userScore.value) ){
    game.add(userName.value,userScore.value).then((response)=>{
      refreshScoresList()
      userName.value=''
      userScore.value=''
    })
    
  }
   
}
document.addEventListener('DOMContentLoaded', refreshScoresList);
refreshButton.addEventListener('click',refreshScoresList)
addButton.addEventListener('click',addScore)