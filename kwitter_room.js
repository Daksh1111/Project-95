
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBvoqUa3nFIb6JrYhnK75LHQyheeENU-AA",
  authDomain: "kwitter-141f6.firebaseapp.com",
  databaseURL: "https://kwitter-141f6-default-rtdb.firebaseio.com",
  projectId: "kwitter-141f6",
  storageBucket: "kwitter-141f6.appspot.com",
  messagingSenderId: "757328848511",
  appId: "1:757328848511:web:a7c7b5199529d830f3414a"
};

 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = " Welcome " +  user_name;
  
   function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
    }

    function getData() {
   firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name = " + Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirettoroomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
  });
};
  getData();

  function redirettoroomname(Name) {
    console.log(Name);
    localStorage.setItem("room_name", Name)
    window.location = "kwitter_page.html";
  }

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}




