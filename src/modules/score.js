export default class Score{
  constructor(id,nom,nbre){
    this.name = nom
    this.score = nbre
    this.index = id
  }
  renderLi = (id)=> {return '<li class="scoreList_content_element '+this.id%2>0?"odd":"peer"+'"> '+this.name+' : '+this.score+'  </li>'}
}