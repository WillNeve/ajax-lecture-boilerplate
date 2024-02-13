console.log("Hello from JavaScript!");

const userForm = document.querySelector('#userForm');

const url = 'https://reqres.in/api/users';

const createUser = (event) => {
  event.preventDefault();
  // extract user informations
  const name = document.querySelector('#name').value;
  const job = document.querySelector('#job').value;

  const user = {
    "name": name,
    "job": job
  }

  const fetchOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(user)
  }

  fetch(url, fetchOptions).then((resp) => resp.json()).then((data) => {
    console.log(data);
  })
}


userForm.addEventListener('submit', createUser)
