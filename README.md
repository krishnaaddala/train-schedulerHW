# train-schedulerHW

Train scheduler application incorporates Firebase to host arrival and departure data. It will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Table of contents
Technologies Used
Applications Used
Screenshots of homework progress
Code Snippets

## Technologies Used
HTML
Javascript/jQuery
FireBase
Moment JS
Markdown

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser

## Screenshots of homework progress

![Code progression Final](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/Code_Final1.png "TrainScheduler Final Layout 1")

![Code progression Final](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/code_final2.png "TrainScheduler Final Layout 2")


## Gif walkthrough

![](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/trainScheduler.gif)


## Code Snippets

```var firebaseConfig = {
    apiKey: "AIzaSyAY6AYGDx-D7WF3a0W5fcs_aK91uCPfp6c",
    authDomain: "train-scheduler-assignme-3cc0b.firebaseapp.com",
    databaseURL: "https://train-scheduler-assignme-3cc0b.firebaseio.com",
    projectId: "train-scheduler-assignme-3cc0b",
    storageBucket: "train-scheduler-assignme-3cc0b.appspot.com",
    messagingSenderId: "474090265715",
    appId: "1:474090265715:web:d2823fa7bb9f7605491e06",
    measurementId: "G-1R09HW8CW6"
};
  ```

  ```function clearTrainOnAdd() {
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
}
  ```

  ``` // adding an object to hold train data to store
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrainTime,
        frequency: trainFrequency
    };
});
  ```
  ```var now = moment();
    var today = now.format('YYYY-MM-DD');
    var nowTS = today + " " + firstTrainTime + ':00'
    var nowTSDate = moment(nowTS).subtract(1, 'day')
    var duration = Math.floor(moment.duration(moment().diff(nowTSDate)).asMinutes());
    var offset = Math.floor(duration % trainFrequency)
    var timeToNextTrain = trainFrequency - offset;
    var nextTrainArrival = moment().add(timeToNextTrain, 'minute').format("HH:mm");
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```