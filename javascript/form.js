/* --------- */
/* VARIABLES */
/* --------- */

const titleInput = document.querySelector("#title");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postal-code");
const areaInput = document.querySelector("#area");
// projectInput = document.querySelector("#project");
const messageInput = document.querySelector("#message");
const formSubmit = document.querySelector("#submit");

const nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/;
let firstName, lastName, email, phone, address, postalCode, area, message;

let data = {};
let validationErrors = {
  firstName,
  lastName,
  email,
  phone,
  address,
  postalCode,
  area,
  message,
};

/* --------- */
/* FUNCTIONS */
/* --------- */

// function titleValidation() {
//   data.titleData = titleInput.value;
// }

// Function that detects if there are any error messages present
// This can be used for each individual validation function
function detectErrorMessage(containerName) {
  if (document.querySelector(`.${containerName} span`)) {
    document
      .querySelectorAll(`.${containerName} span`)
      .forEach((spanElement) => {
        spanElement.remove();
      });
  }
}

function displayErrorMessage(errorMessage, containerName, idSelector) {
  const errorDisplay = document.createElement("span");
  errorDisplay.innerHTML = `${errorMessage}`;
  document.querySelector(`.${containerName} label`).after(errorDisplay);
  document.querySelector(`#${idSelector}`).style.borderBottomColor =
    "rgb(246, 78, 78)";
}

function firstNameValidation() {
  detectErrorMessage("first-name-container");

  // function displayErrorMessage() {
  //   const errorDisplay = document.createElement("span");
  //   errorDisplay.innerHTML = validationErrors.firstName;
  //   document.querySelector(".first-name-container label").after(errorDisplay);
  //   firstNameInput.style.borderBottomColor = "rgb(246, 78, 78)";
  // }

  firstName = firstNameInput.value;
  if (!firstName) {
    console.error("No first name provided");
    validationErrors.firstName = "Please provide a first name";
    detectErrorMessage();
    displayErrorMessage(
      validationErrors.firstName,
      "first-name-container",
      "first-name"
    );
  } else {
    if (!nameRegEx.test(firstName)) {
      console.error("Invalid first name");
      validationErrors.firstName =
        "Invalid format - please avoid special characters";
      detectErrorMessage();
      displayErrorMessage(
        validationErrors.firstName,
        "first-name-container",
        "first-name"
      );
    } else {
      console.info(`First name (${firstName}) is valid`);
      delete validationErrors.firstName;
      detectErrorMessage();
      firstNameInput.style.borderBottom = "solid 2px green";
      console.log(validationErrors);
    }
  }
}

console.log(validationErrors);

function lastNameValidation() {
  detectErrorMessage("last-name-container");

  // function displayErrorMessage() {
  //   const errorDisplay = document.createElement("span");
  //   errorDisplay.innerHTML = validationErrors.lastName;
  //   document.querySelector(".last-name-container label").after(errorDisplay);
  //   lastNameInput.style.borderBottomColor = "rgb(246, 78, 78)";
  // }

  lastName = lastNameInput.value;
  if (!lastName) {
    console.error("No last name provided");
    validationErrors.lastName = "Please provide a last name";
    detectErrorMessage();
    displayErrorMessage(
      validationErrors.lastName,
      "last-name-container",
      "last-name"
    );
  } else {
    if (!nameRegEx.test(lastName)) {
      console.error("Invalid last name");
      validationErrors.lastName =
        "Invalid format - please avoid special characters and numbers";
      detectErrorMessage();
      displayErrorMessage(
        validationErrors.lastName,
        "last-name-container",
        "last-name"
      );
    } else {
      console.info(`Last name (${lastName}) is valid`);
      delete validationErrors.lastName;
      detectErrorMessage();
      lastNameInput.style.borderBottomColor = "green";
      console.log(validationErrors);
    }
  }
}

function emailValidation() {
  detectErrorMessage("email-container");

  email = emailInput.value;
  if (!email) {
    console.error("Please enter valid E-Mail address");
    validationErrors.email = "Please provide an E-Mail address";
    detectErrorMessage();
    displayErrorMessage(validationErrors.email, "email-container", "email");
  } else {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(email)) {
      console.error("Invalid E-Mail");
      validationErrors.email = "Invalid format (max@mustermann.ch)";
      detectErrorMessage();
      displayErrorMessage(validationErrors.email, "email-container", "email");
    } else {
      console.info("Valid E-Mail address :)");
      delete validationErrors.email;
      detectErrorMessage();
      console.log(validationErrors);
    }
  }
}

function phoneValidation() {
  detectErrorMessage("phone-container");

  phone = phoneInput.value;
  if (!phone) {
    console.error("No phone number provided");
    validationErrors.phone = "No phone number provided";
    detectErrorMessage();
    displayErrorMessage(validationErrors.phone, "phone-container", "phone");
  } else {
    const phoneRegEx = /^(\+|00)(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegEx.test(phone)) {
      console.error("Invalid phone number");
      validationErrors.phone =
        "Invalid format - please include 00 or +, followed by the country code";
      detectErrorMessage();
      displayErrorMessage(validationErrors.phone, "phone-container", "phone");
    } else {
      console.info(`Phone number (${phone}) is valid`);
      delete validationErrors.phone;
      detectErrorMessage();
      console.log(validationErrors);
    }
  }
}

function addressValidation() {
  address = addressInput.value;
  if (!address) {
    console.error("No address provided");
    validationErrors.address = "No address provided";
  } else {
    console.info(`Address provided: ${address}`);
    delete validationErrors.address;
    console.log(validationErrors);
  }
}

function postalCodeValidation() {
  postalCode = postalCodeInput.value;
  if (!postalCode) {
    console.error("No postal code provided");
    validationErrors.postalCode = "No postal code provided";
  } else {
    const zipRegExGeneral = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
    const zipRegExCanada = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const zipRegExUK =
      /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
    if (
      !(
        zipRegExGeneral.test(postalCode) ||
        zipRegExCanada.test(postalCode) ||
        zipRegExUK.test(postalCode)
      )
    ) {
      console.error("Invalid postal code");
      validationErrors.postalCode = "Invalid postal code";
    } else {
      console.info(`Postal code (${postalCode}) is valid`);
      delete validationErrors.postalCode;
      console.log(validationErrors);
    }
  }
}

function areaValidation() {
  area = areaInput.value;
  if (!area) {
    console.error("No location provided");
    validationErrors.area = "No location provided";
  } else {
    console.info(`Location provided: ${area}`);
    delete validationErrors.area;
    console.log(validationErrors);
  }
}

function messageValidation() {
  message = messageInput.value;
  if (!message) {
    console.error("No message provided");
    validationErrors.message = "No message provided";
  } else {
    if (message.length <= 30) {
      console.error("Not enough characters");
      validationErrors.message = "Not enough characters (min. 30)";
    } else {
      console.info("Message has enough characters");
      delete validationErrors.message;
      console.log(validationErrors);
    }
  }
}

function validateForm(event) {
  event.preventDefault();

  // data and validationErrors are both objects, because we have defined them as such (data = {})
  // First (theoretically) we want to add the input data of the user to the
  // data object we have defined, so we can later send this information to
  // the backend.
  data.firstName = firstName;
  data.lastName = lastName;
  data.email = email;
  data.phone = phone;
  data.address = address;
  data.postalCode = postalCode;
  data.area = area;
  data.message = message;

  // We then check to see if there are still any errors
  if (Object.keys(validationErrors).length > 0) {
    // If there are still validation errors, log an error to the console
    console.error("Form is not complete");
  } else {
    // If there are no validation errors,
    // send form to backend (we use console.log because we have not worked with backend yet)
    console.log("Sending form data to backend");
  }

  console.log(data);
}

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

// titleInput.addEventListener("focusout", titleValidation);
firstNameInput.addEventListener("focusout", firstNameValidation);
lastNameInput.addEventListener("focusout", lastNameValidation);
emailInput.addEventListener("focusout", emailValidation);
phoneInput.addEventListener("focusout", phoneValidation);
addressInput.addEventListener("focusout", addressValidation);
postalCodeInput.addEventListener("focusout", postalCodeValidation);
areaInput.addEventListener("focusout", areaValidation);
messageInput.addEventListener("focusout", messageValidation);
formSubmit.addEventListener("click", validateForm);
