//connect to FireBase
//firebase.app.config
//firebase.database
//onClick event for the Submit button and send the response to firebase
//logic to update the existing page with some data from firebase (append to the page)
//moment JS logic for calculating next train arrival and minutes away


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
function clearTrainOnAdd() {
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
}

//adding train using the submit button
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#trainDestination").val().trim();
    var firstTrainTime = moment($("#firstTrainTime").val().trim(), "HH:mm").format("HH:mm");
    var trainFrequency = parseInt($("#trainFrequency").val().trim());

    // adding an object to hold train data to store
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrainTime,
        frequency: trainFrequency
    };
    database.ref().push(newTrain);
    clearTrainOnAdd();
});

//adding to firebase as a child event and this adds a row to the HTML when a user adds a train
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrain;
    var trainFrequency = childSnapshot.val().frequency;

//moment JS logic to calculate nextTrainArrival & timeToNextTrain
    var now = moment();
    var today = now.format('YYYY-MM-DD');
    var nowTS = today + " " + firstTrainTime + ':00'
    var nowTSDate = moment(nowTS).subtract(1, 'day')
    var duration = Math.floor(moment.duration(moment().diff(nowTSDate)).asMinutes());
    var offset = Math.floor(duration % trainFrequency)
    var timeToNextTrain = trainFrequency - offset;
    var nextTrainArrival = moment().add(timeToNextTrain, 'minute').format("HH:mm");


//append the tabe row and table data dynamically
    var newTrainAdded = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(nextTrainArrival),
        $("<td>").text(timeToNextTrain),
    );

    // Append the new row to the table
    $("#trainSchedule > tbody").append(newTrainAdded);

});