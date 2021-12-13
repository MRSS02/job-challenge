function validate(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  
  if (firstName.children[0].value) onValid(firstName);
  else onInvalid(firstName, "First Name cannot be empty");

  if (lastName.children[0].value) onValid(lastName);
  else onInvalid(lastName, "Last Name cannot be empty");
  
  if (isEmailValid(email)) onValid(email);
  else onInvalid(email, "Looks like this is not an email");
  
  if (password.children[0].value) onValid(password);
  else onInvalid(password, "Password cannot be empty");

}

function isEmailValid(email) {
   return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
     email.children[0].value.toLowerCase()   
   ) 
}

function onInvalid(element, message) {

  element.children[0].setAttribute("aria-invalid", "true");
  let p = document.createElement("p");
  p.innerHTML = message;
  p.className = "warningMessage";
  let img = document.createElement("img");
  img.className = "warningSign";
  img.src = "./img/warning.svg";
  console.log(img);
  if (element.children.length == 1) {
    element.append(p);
    element.append(img);
  }
}

function onValid(element) {

  element.children[0].setAttribute("aria-invalid", "false");
  if (element.children.length == 3) {
    element.children[2].remove();
    element.children[1].remove();
  }
}