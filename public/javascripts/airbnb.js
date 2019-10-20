var roomDiv = document.getElementById("smart-banner");
var newElement = document.createElement("div");
newElement.style = "position: relative; left: 18%;";

var chatframe = document.createElement("iframe");
chatframe.setAttribute("allow", "microphone");
chatframe.setAttribute("width", "600");
chatframe.setAttribute("height", "400");
chatframe.setAttribute("src", "https://console.dialogflow.com/api-client/demo/embedded/dc5d9e65-0c8a-4465-8596-ba5ef606b2e4");

var searchFrame = document.createElement("iframe");
searchFrame.setAttribute("src", "http://localhost:3000/search");
searchFrame.setAttribute("width", "600");
searchFrame.setAttribute("height", "400");

var searchImage = document.createElement("img");
searchImage.setAttribute("src", "https://a0.muscache.com/im/pictures/31210274/186b8c00_original.jpg?aki_policy=xx_large")
searchImage.setAttribute("width", "600");
searchImage.setAttribute("height", "400");

newElement.append(chatframe);
//newElement.appendChild(searchFrame);
newElement.append(searchImage);
roomDiv.appendChild(newElement);
//document.body.appendChild(newElement);

//var html = '<script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js"></script>';
var firebaseDiv = document.createElement("script");
firebaseDiv.setAttribute("src", "https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
var firebaseDbDiv = document.createElement("script");
firebaseDbDiv.setAttribute("src", "https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js");
document.body.appendChild(firebaseDiv);
document.body.appendChild(firebaseDbDiv);

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkNy0ys7beRljZQImYHF3CaHM3j1lLXtM",
    authDomain: "callmemaybe-at-genesys-hack.firebaseapp.com",
    databaseURL: "https://callmemaybe-at-genesys-hack.firebaseio.com",
    projectId: "callmemaybe-at-genesys-hack",
    storageBucket: "callmemaybe-at-genesys-hack.appspot.com",
    messagingSenderId: "105991971063",
    appId: "1:105991971063:web:0ff73b94e8e3fb04faf3f2"
}

var db;
var initializeFb = function() {
    // Initialize Firebase
    if (firebase.apps.length == 0) {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database().ref('images/');
        db.once('value').then(function (snapshot) {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log('current index not in db');
            }
          }).then(() => {
        
          }).catch(err => {
            console.log('error :' + err);
          });
    }
}
window.setTimeout(initializeFb, 2000);