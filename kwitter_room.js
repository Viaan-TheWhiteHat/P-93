//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAgqBffqd3gm3jxMCwkSm6RkDKDkoLrAQY",
      authDomain: "kwitter-b6226.firebaseapp.com",
      projectId: "kwitter-b6226",
      storageBucket: "kwitter-b6226.appspot.com",
      messagingSenderId: "630963919568",
      appId: "1:630963919568:web:cebdf9a0e01a26dae59cd5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();