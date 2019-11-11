//connect to FireBase
//onClick event for the Submit button and send the response to firebase
//logic to update the existing page with some data from firebase (append to the page)
// look at class example for firebase
// firebase.app.config
//firebase.database

//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyAY6AYGDx-D7WF3a0W5fcs_aK91uCPfp6c",
    authDomain: "train-scheduler-assignme-3cc0b.firebaseapp.com",
    databaseURL: "https://train-scheduler-assignme-3cc0b.firebaseio.com",
    projectId: "train-scheduler-assignme-3cc0b",
    storageBucket: "train-scheduler-assignme-3cc0b.appspot.com",
    messagingSenderId: "474090265715",
    appId: "1:474090265715:web:d2823fa7bb9f7605491e06",
    measurementId: "G-1R09HW8CW6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Create a variable to reference the database.
  var database = firebase.database();
//clear function after  adding the train to the train schedule
function clearTrainOnAdd(){
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
    }

  //adding train using the submit button
  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainName").val().trim();
  var trainDestination = $("#trainDestination").val().trim();
  //using moment update THIS SECTION TO USE HH:mm - military time
  var firstTrainTime = moment($("#firstTrainTime").val().trim(), "MM/DD/YYYY").format("X");
  var trainFrequency = $("#trainFrequency").val().trim();

  // adding an object to hold train data to store
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrain: firstTrainTime,
    frequency: trainFrequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newEmp.firstTrain);
  console.log(newTrain.frequency);

  clearTrainOnAdd();
  });

  //adding to firebase as a child event and this adds a row to the HTML when a user adds a train
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrain;
    var trainFrequency = childSnapshot.val().frequency;
    
    console.log(empName);
    console.log(empRole);
    console.log(empStart);
    console.log(empRate);

    var frequencyInMins = "";

    var nextTrainArrival = "";

    var minutesAwayForNextTrain = "";


    var newTrainAdded = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(frequencyInMins),
        $("<td>").text(nextTrainArrival),
        $("<td>").text(minutesAwayForNextTrain),
      );
    
      // Append the new row to the table
      $("#trainSchedule > tbody").append(newTrainAdded);

  });