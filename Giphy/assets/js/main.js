// console.log("on");

$(document).ready(function () {


     $("#run-search").on("click", function () {
          event.preventDefault();
          // This line grabs the input from the textbox
          var newAnimal = $("#search-term").val();
          var section = $("#button-row");
          console.log(newAnimal);
          if (newAnimal) {
               $(section).append('<button class="btn btn-info animal-button" data-animal="' + newAnimal + '">' + newAnimal + '</button>');
          }
     });


     // Example queryURL for Giphy API
     $(document.body).on("click", ".animal-button", function () {
          event.preventDefault();


          // Grabbing and storing the data-animal property value from the button
          var animal = $(this).attr("data-animal").trim();
          console.log(animal);

          // Constructing a queryURL using the animal name
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
               animal + "&api_key=h9DH0IrPr2xFYWRNCHZDGGbG9j9TxI06";


          // Performing an AJAX request with the queryURL
          $.ajax({
               url: queryURL,
               method: "GET"
          })
               // After data comes back from the request
               .then(function (response) {
                    console.log(queryURL);

                    console.log(response);
                    // storing the data from the AJAX request in the results variable
                    var results = response.data;

                    // Looping through each result item
                    for (var i = 0; i < results.length; i++) {

                         // Creating and storing a div tag
                         var animalDiv = $("<div>");

                         // Creating a paragraph tag with the result item's rating
                         var p = $("<p>").text("Rating: " + results[i].rating);

                         // Creating and storing an image tag
                         var animalImage = $("<img>");
                         // Setting the src attribute of the image to a property pulled off the result item
                         animalImage.attr("src", results[i].images.fixed_height.url);
                         animalImage.attr("src", results[i].images.fixed_height.url);
                         animalDiv.attr("class", "col-lg-4");

                         // Appending the paragraph and image tag to the animalDiv
                         animalDiv.append(p);
                         animalDiv.append(animalImage);

                         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                         $("#gifs-appear-here").prepend(animalDiv);
                    }
               });



     });
});



