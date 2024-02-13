// import Swal class from 'sweetalert2' (as we named it in importmaps)
import Swal from 'sweetalert2';
// the form element that we will be filling out user info's on
const userForm = document.querySelector('#userForm');

// the api url (endpoint) that we will be sending our request to
const url = 'https://reqres.in/api/users';

// callback function that we call when form submits
const createUser = (event) => {
  event.preventDefault();
  // extract user informations from associated input elements
  const name = document.querySelector('#name').value;
  const job = document.querySelector('#job').value;
  // create a user object with these infos
  const user = {
    "name": name,
    "job": job
  }
  // options that we will pass in to fetch
  const fetchOptions = {
    "method": "POST", // we define the verb/method as POST (default is get unless specified)
    "headers": {
      "Content-Type": "application/json" // we specify the data we are sending is JSON
    },
    "body": JSON.stringify(user) // we send the data (our user obj), as a JSON string
  }
  // we call fetch with the url as first argument and our options as second
  fetch(url, fetchOptions).then((resp) => { // we listen for the request/promise to complete/fulfill with .then
    // we process the response (resp), which is what fulfilled fetch promise returns
    if (resp.status === 200 || resp.status === 201) { // we look at the status of the response
      // notify the user that the request was succesful
      Swal.fire({
        "title": "User created succesfully",
        "icon": "success"
      })
    } else {
      // notify the user that there was an error during the request
      Swal.fire({
        "title": "Sorry, something went wrong",
        "icon": "error"
      })
    }
    //  we call resp.json() to convert our response data to json, this returns a promise
    return resp.json()
  }).then((data) => { // we listen for the conversion/promise to complete/fulfill with .then
    console.log(data); // we log our recieved data to the console
  })
}

// listen to form submittion on our form element
userForm.addEventListener('submit', createUser)
