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

![Code progression Final](https://github.com/krishnaaddala/HW-giphyAssignment/blob/master/assets/images/StartGifTasticPage.png "Starting page of gifTastic")

![Code progression Final](https://github.com/krishnaaddala/HW-giphyAssignment/blob/master/assets/images/responsive-1.png "gifTastic reponsive layout 1")

![Code progression Final](https://github.com/krishnaaddala/HW-giphyAssignment/blob/master/assets/images/responsive-2.png "gifTastic reponsive layout 2")

## Gif walkthrough

![](https://github.com/krishnaaddala/HW-Giphyassignment2/blob/master/assets/images/Nov-04-2019%2022-01-15.gif)


## Code Snippets

```<body onload="addButtons()" background="assets/images/marvelvsDC.jpg">
    <div class="container">
        <h1> Giphy Images</h1>

        <div class="giphy-form">
            <label for="giphy-input"></label>
            <!-- added onFocus to remove the search field automatically
            upon adding the search as a button -->
            <input type="text" id="giphy-input" onfocus="this.value=''">
            <input id="add-giphy" type="submit" value="Add a Superhero">
            <div id="dynamic-btnview"></div>
        </div>
  ```

  ```function giphyDisplay() {
    $("#giphy-btndisplay").empty();
    var superhero = $(this).attr("data-giphy");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5&q=" + superhero + "&limit=10&offset=0&rating=G&lang=en";
    //Making an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
  ```

  ```$("#add-giphy").on("click", function (event) {
    event.preventDefault();
    var superhero = $("#giphy-input").val().trim();
    superheroList.push(superhero);
    addDynamicBtn(superhero);
});
  ```
  ```$(document).on("click", ".super_hero_images", function () {
    img = this;
    var imgSrc = img.getAttribute("src");
    var imgAlt = img.getAttribute("data-alt");
    img.setAttribute("src", imgAlt);
    img.setAttribute("data-alt", imgSrc);
});
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```