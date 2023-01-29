/* --------- */
/* VARIABLES */
/* --------- */

// Query Selectors
const titleInput = document.querySelector("#title");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postal-code");
const areaInput = document.querySelector("#area");
const projectInput = document.querySelector("#project");
const textareaInput = document.querySelector("textarea");
const messageInput = document.querySelector("#message");
const formSubmit = document.querySelector("#submit");

// RegEx
const nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/;
const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegEx = /^(\+|00)(?:[0-9] ?){6,14}[0-9]$/;
const zipRegExGeneral = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
const zipRegExCanada = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const zipRegExUK =
  /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;

// Objects for collecting user input
const selectTags = document.getElementsByTagName("select");
const inputsOnSubmit = document.querySelectorAll(
  "input:not(#submit), #message"
);

let title = titleInput[0];
let project = projectInput[0];
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

function titleValidation() {
  title = titleInput.value;
}

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

// Function that allows display of the error message within
// each input field validation
function displayErrorMessage(errorMessage, containerName, idSelector) {
  const errorDisplay = document.createElement("span");
  errorDisplay.innerHTML = `${errorMessage}`;
  document.querySelector(`.${containerName} label`).after(errorDisplay);
  document.querySelector(`#${idSelector}`).style.borderBottomColor =
    "rgb(246, 78, 78)";
}

function styleConfirmation(inputSelector) {
  inputSelector.style.borderBottom = "solid 1px green";
}

function removeSubmitMessage() {
  setTimeout(() => {
    document.querySelector(".submit-container span").remove();
  }, 5000);
}

function firstNameValidation() {
  detectErrorMessage("first-name-container");

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
      styleConfirmation(firstNameInput);
      console.log(validationErrors);
    }
  }
}

function lastNameValidation() {
  detectErrorMessage("last-name-container");

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
      styleConfirmation(lastNameInput);
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
    if (!emailRegEx.test(email)) {
      console.error("Invalid E-Mail");
      validationErrors.email = "Invalid format (max@mustermann.ch)";
      detectErrorMessage();
      displayErrorMessage(validationErrors.email, "email-container", "email");
    } else {
      console.info("Valid E-Mail address :)");
      delete validationErrors.email;
      detectErrorMessage();
      styleConfirmation(emailInput);
      console.log(validationErrors);
    }
  }
}

function phoneValidation() {
  detectErrorMessage("phone-container");

  phone = phoneInput.value;
  if (!phone) {
    console.error("No phone number provided");
    validationErrors.phone = "Please provide a phone number";
    detectErrorMessage();
    displayErrorMessage(validationErrors.phone, "phone-container", "phone");
  } else {
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
      styleConfirmation(phoneInput);
      console.log(validationErrors);
    }
  }
}

function addressValidation() {
  detectErrorMessage("address-container");

  address = addressInput.value;
  if (!address) {
    console.error("No address provided");
    validationErrors.address = "Please provide an address";
    detectErrorMessage();
    displayErrorMessage(
      validationErrors.address,
      "address-container",
      "address"
    );
  } else {
    console.info(`Address provided: ${address}`);
    delete validationErrors.address;
    detectErrorMessage();
    styleConfirmation(addressInput);
    console.log(validationErrors);
  }
}

function postalCodeValidation() {
  detectErrorMessage("postal-code-container");

  postalCode = postalCodeInput.value;
  if (!postalCode) {
    console.error("No postal code provided");
    validationErrors.postalCode = "Please provide a postal code";
    detectErrorMessage();
    displayErrorMessage(
      validationErrors.postalCode,
      "postal-code-container",
      "postal-code"
    );
  } else {
    if (
      !(
        zipRegExGeneral.test(postalCode) ||
        zipRegExCanada.test(postalCode) ||
        zipRegExUK.test(postalCode)
      )
    ) {
      console.error("Invalid postal code");
      validationErrors.postalCode = "Invalid postal code";
      detectErrorMessage();
      displayErrorMessage(
        validationErrors.postalCode,
        "postal-code-container",
        "postal-code"
      );
    } else {
      console.info(`Postal code (${postalCode}) is valid`);
      delete validationErrors.postalCode;
      detectErrorMessage();
      styleConfirmation(postalCodeInput);
      console.log(validationErrors);
    }
  }
}

function areaValidation() {
  detectErrorMessage("area-container");

  area = areaInput.value;
  if (!area) {
    console.error("No area provided");
    validationErrors.area = "Please provide an area";
    detectErrorMessage();
    displayErrorMessage(validationErrors.area, "area-container", "area");
  } else {
    console.info(`Area provided: ${area}`);
    delete validationErrors.area;
    detectErrorMessage();
    styleConfirmation(areaInput);
    console.log(validationErrors);
  }
}

function projectValidation() {
  project = projectInput.value;
}

function messageValidation() {
  detectErrorMessage("message-container");

  message = messageInput.value;
  if (!message) {
    console.error("No message provided");
    validationErrors.message = "Please provide a message";
    detectErrorMessage();
    displayErrorMessage(
      validationErrors.message,
      "message-container",
      "message"
    );
    document.querySelector("#message").style.borderBottomColor = "var(--black)";
  } else {
    if (message.length <= 30) {
      console.error("Not enough characters");
      validationErrors.message = "Not enough characters (min. 30)";
      detectErrorMessage();
      displayErrorMessage(
        validationErrors.message,
        "message-container",
        "message"
      );
      document.querySelector("#message").style.borderBottomColor =
        "var(--black)";
    } else {
      console.info("Message has enough characters");
      delete validationErrors.message;
      console.log(validationErrors);
      detectErrorMessage();
      console.log(validationErrors);
    }
  }
}

function validateForm(event) {
  event.preventDefault();
  detectErrorMessage("submit-container");

  // data and validationErrors are both objects, because we have defined them as such (data = {})

  // Check to see if there are still any errors
  if (Object.keys(validationErrors).length > 0) {
    // If there are still validation errors, log an error to the console
    console.error("Form is not complete");
    const submitError = document.createElement("span");
    submitError.innerHTML = "Please complete the form";
    formSubmit.after(submitError);

    removeSubmitMessage();
  } else {
    // If there are no validation errors,
    // send form to backend (we use console.log because we have not worked with backend yet)
    // form.reset();
    console.info("Sending form data to backend");

    const submitValidation = document.createElement("span");
    submitValidation.innerHTML = "Thank you!";
    formSubmit.after(submitValidation);
    document.querySelector(".submit-container span").style.color =
      "var(--black)";

    removeSubmitMessage();

    // (Theoretically) The input data of the user should be sent to the
    // data object we have defined, so we can later send this information to
    // the backend.
    data.title = title;
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.phone = phone;
    data.address = address;
    data.postalCode = postalCode;
    data.area = area;
    data.project = project;
    data.message = message;

    console.log(data);

    // When the input has been saved to the backend, the input fields need to
    // be cleared
    inputsOnSubmit.forEach((input) => {
      input.value = "";
      input.style.borderBottom = "1px solid black";
    });

    // Resetting the dropdowns to their default value
    for (var i = 0; i < selectTags.length; i++) {
      selectTags[i].selectedIndex = 0;
    }

    data = {};
    validationErrors = {
      firstName,
      lastName,
      email,
      phone,
      address,
      postalCode,
      area,
      message,
    };
  }
  // the object "data" has now been cleard in case of another input
  console.log(data);
}

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

titleInput.addEventListener("focusout", titleValidation);
firstNameInput.addEventListener("focusout", firstNameValidation);
lastNameInput.addEventListener("focusout", lastNameValidation);
emailInput.addEventListener("focusout", emailValidation);
phoneInput.addEventListener("focusout", phoneValidation);
addressInput.addEventListener("focusout", addressValidation);
postalCodeInput.addEventListener("focusout", postalCodeValidation);
projectInput.addEventListener("focusout", projectValidation);
areaInput.addEventListener("focusout", areaValidation);
messageInput.addEventListener("focusout", messageValidation);
formSubmit.addEventListener("click", validateForm);

// document.querySelectorAll('input').forEach( element => {
//   element.addEventListener('focusout', func => {

//   })
// })

// }
