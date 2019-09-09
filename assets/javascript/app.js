$("button").on("click", function() {
    var year = 2008;
var queryURL = https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=qI4RzAhO7OerqhKQ6ZHukByZkZOI2zL1
var queryURL = "https://api.nytimes.com/svc/archive/v1/"


$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response) {
// Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
// Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
​
      console.log(response);
​
      // Step 2: since the image information is inside of the data key,
      // make a variable named results and set it equal to response.data   
  })
