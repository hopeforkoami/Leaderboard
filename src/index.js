import _ from 'lodash'; // eslint-disable-line
import Game from './modules/game.js';
import './style.css';

const game = new Game()
game.loadGameData()
game.add('tester1',1000)
game.loadGameData()