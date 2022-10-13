export default class Service {
   apiHost = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api'

   status = false;

   async createGame(gameName) {
     let retour = '';
     const rep = await fetch(`${this.apiHost}/games/`, {
       method: 'POST',
       body: JSON.stringify({
         name: gameName,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     });
     retour = await rep.json();

     return retour;
   }

   loadGameData =async (id) => {
     const reponse = await fetch(`${this.apiHost}/games/${id}/scores/`);
     const retour = await reponse.json();
     return retour;
   }

   addNewScore = async (id, name, score) => {
     fetch(`${this.apiHost}/games/${id}/scores/`, {
       method: 'POST',
       body: JSON.stringify({
         user: name,
         score,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     })
       .then((response) => {
         this.status = true;
         return response.json();
       })
       .then((json) => {
         this.status = false;
         return json;
       });
   }
}