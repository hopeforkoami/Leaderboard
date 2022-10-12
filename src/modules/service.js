let xhr = new XMLHttpRequest();
xhr.open("POST", "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
let gameName=document.querySelector('.game_name').value

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};

let data = {
  "name": gameName
};

xhr.send(JSON.parse(data));

$.ajax({
  type: "POST",
  url: "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
  data: `{
    "name": 78912,
  }`,
  success: function (result) {
     console.log(result);
  },
  dataType: "json"
});
