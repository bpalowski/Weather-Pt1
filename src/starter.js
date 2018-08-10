// // // Ajax using jQuery’s ajax() method to make the API call and return the data.
// // $(document).ready(function() {
// //   $('#weatherLocation').click(function() {
// //     let city = $('#location').val();
// //     $('#location').val("");
// //     $.ajax({
// //       //This method is used when we want to make an asynchronous HTTP request.
// //       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f160f325aa62fa3e3a2ca7e693cda176`,
// //       type: 'GET',
// //       data: {
// //         format: 'json'
// //       },
// //       // provide callbacks, one for a successful HTTP request
// //       //We could call the parameter something other than response
// //       //success: function(response){
// //       success: function(shoe) {
// //         $('.showHumidity').text(`The humidity in ${city} is ${shoe.main.humidity}%`);
// //         $('.showTemp').text(`The temperature in Kelvins is ${shoe.main.temp}.`);
// //       },
// //       //request that returns an error.
// //       error: function() {
// //         $('#errors').text("There was an error processing your request. Please try again.");
// //       }
// //     });
// //   });
// // });
//
// //Making API Calls with JavaScript API call with vanilla JavaScript using JS’s built-in XMLHttpRequest object.
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     const city = $('#location').val();
//     $('#location').val("");
//
//     let request = new XMLHttpRequest();
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f160f325aa62fa3e3a2ca7e693cda176`;
//
//
//     //a function that listens for any changes to the readyState of the XMLHttpRequest;
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
//     //the actual processing and sending of the request;
//     // the method of the request (in this case GET), the url (which we stored in a variable), and a boolean for whether the request should be async or not
//     request.open("GET", url, true);
//     request.send();
//
//     //function that will be used as a callback to display results in the browser.
//     const getElements = function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     };
//   });
// });
