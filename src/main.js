import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { starter } from './starter.js';
//
// // Ajax using jQuery’s ajax() method to make the API call and return the data.
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.ajax({
//       //This method is used when we want to make an asynchronous HTTP request.
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f160f325aa62fa3e3a2ca7e693cda176`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       // provide callbacks, one for a successful HTTP request
//       //We could call the parameter something other than response
//       //success: function(response){
//       success: function(shoe) {
//         $('.showHumidity').text(`The humidity in ${city} is ${shoe.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${shoe.main.temp}.`);
//       },
//       //request that returns an error.
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.");
//       }
//     });
//   });
// });

//Making API Calls with JavaScript API call with vanilla JavaScript using JS’s built-in XMLHttpRequest object.
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     const city = $('#location').val();
//     $('#location').val("");
//
//     let request = new XMLHttpRequest();
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
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


//jQuery to wrap async code in a promise.
//use get This function is shorthand for ajax().
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     //Remember, however, that we can create prototypes on different objects that have the same name but different functionality. With get() and ajax(), jQuery creates a deferred object that can use jQuery’s then() method. With ES6, we’ll create a new Promise from scratch and then take advantage of its then() method.
//     //use get() This function is shorthand for ajax(). jQuery also provides other shorthand functions such as post().
//     //jQuery’s then() method to wrap the GET request in a promise. The code inside then() will be called if the promise is fulfilled. If the promise is rejected, it will be passed into fail().
//     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`).then(function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     }).fail(function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//     });
//   });
// });

//Promises in ES6
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//
//     let promise = new Promise(function(resolve, reject) {
//       //Because we’re solving this problem with JavaScript, not jQuery, we create a new XMLHttpRequest object here
//       let request = new XMLHttpRequest();
//       let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//       //onload() is called once the request is complete.
//       //With onload(), we wait until the request is complete. If the response has a 200 status, we’ll resolve the promise, which will return the response from the request.
//       request.onload = function() {
//         if (this.status === 200) {
//           //resolve will determine what happens when the promise
//           resolve(request.response);
//         } else {
//           //reject will handle the promise if it’s rejected.
//           //statusText is a built-in prototype that can be called on a XMLHttpRequest object.)
//           reject(Error(request.statusText));
//         }
//       };
//       //promise also handles opening and sending the request.
//       request.open("GET", url, true);
//       request.send();
//     });
//
//
//
//       promise.then(function(response){
//       let body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     },
//      function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
// });
