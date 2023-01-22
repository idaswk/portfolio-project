// ---------
// VARIABLES
// ---------

// Defining a data object in which we store the user inputs
let data = {};
// Defining a data object in which we store the errors
let validationErrors = {};

// data.titleInput = document.querySelector("#title").value;
data.firstNameInput = document.querySelector("#first-name").value;
data.lastNameInput = document.querySelector("#surname").value;
data.emailInput = document.querySelector("#email").value;
data.phoneInput = document.querySelector("#phone").value;
data.addressInput = document.querySelector("#address").value;
data.postalCodeInput = document.querySelector("#postal-code").value;
data.locationInput = document.querySelector("#location").value;
data.projectInput = document.querySelector("#project").value;
data.messageInput = document.querySelector("#message").value;

const nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;

// ---------
// FUNCTIONS
// ---------

function firstNameValidation() {
  if (!data.firstNameInput) {
    console.error("No first name provided");
    validationErrors.firstNameInput = "No first name provided";
  } else {
    if (!nameRegEx.test(data.firstNameInput)) {
      console.error("Invalid first name");
      validationErrors.firstNameInput =
        "Invalid format - please avoid special characters and numbers";
    } else {
      console.info(`First name (${data.firstNameInput}) is valid`);
    }
  }
}

const lastNameValidation = () => {
  if (!data.lastNameInput) {
    console.error("No last name provided");
    validationErrors.lastNameInput = "No last name provided";
  } else {
    if (!nameRegEx.test(data.lastNameInput)) {
      console.error("Invalid last name");
      validationErrors.lastNameInput =
        "Invalid format - please avoid special characters and numbers";
    } else {
      console.info(`Last name (${data.lastNameInput}) is valid`);
    }
  }
};

const emailValidation = () => {
  if (!data.emailInput) {
    console.error("No E-Mail provided");
    validationErrors.emailInput = "No E-Mail provided";
  } else {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(data.email)) {
      console.error("Invalid E-Mail");
      validationErrors.emailInput = "Invalid format";
    } else {
      console.info(`E-Mail (${data.emailInput}) is valid`);
    }
  }
};

const phoneValidation = () => {
  if (!data.phoneInput) {
    console.error("No phone number provided");
    validationErrors.phoneInput = "No phone number provided";
  } else {
    const phoneRegEx = /^(\+|00)(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegEx.test(data.phoneInput)) {
      console.error("Invalid E-Mail");
      validationErrors.phoneInput =
        "Invalid format - please include 00 or +, followed by the country code";
    } else {
      console.info(`Phone number (${data.phoneInput}) is valid`);
    }
  }
};

const addressValidation = () => {
  if (!data.addressInput) {
    console.error("No address provided");
    validationErrors.addressInput = "No address provided";
  } else {
    console.info(`Address provided: ${data.addressInput}`);
  }
};

const postalCodeValidation = () => {
  if (!data.postalCodeInput) {
    console.error("No postal code provided");
    validationErrors.postalCodeInput = "No postal code provided";
  } else {
    const postalRegExGeneral = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
    const postalRegExCanada = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const postalRegExUK =
      /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
    if (
      !postalRegExGeneral.test(data.postalCodeInput) ||
      !postalRegExCanada.test(data.postalCodeInput) ||
      !postalRegExUK.test(data.postalCodeInput)
    ) {
      console.error("Invalid postal code");
      validationErrors.postalCodeInput = "Invalid format";
    } else {
      console.info(`Postal code (${data.postalCodeInput}) is valid`);
    }
  }
};

const locationValidation = () => {
  if (!data.locationInput) {
    console.error("No location provided");
    validationErrors.locationInput = "No location provided";
  } else {
    console.info(`Location provided: ${data.locationInput}`);
  }
};

const messageValidation = () => {
  if (!data.messageInput) {
    console.error("No message provided");
    validationErrors.messageInput = "No message provided";
  } else {
    if (data.messageInput.length <= 30) {
      console.error("Not enough characters");
      validationErrors.messageInput = "Not enough characters (min. 30)";
    } else {
      console.info("Message has enough characters");
    }
  }
};

function validateForm(event) {}

// ---------------
// EVENT LISTENERS
// ---------------

document
  .querySelector("#first-name")
  .addEventListener("focusout", firstNameValidation);
document
  .querySelector("#surname")
  .addEventListener("focusout", lastNameValidation);
document.querySelector("#email").addEventListener("focusout", emailValidation);
document.querySelector("#phone").addEventListener("focusout", phoneValidation);
document
  .querySelector("#address")
  .addEventListener("focusout", addressValidation);
document
  .querySelector("#postal-code")
  .addEventListener("focusout", postalCodeValidation);
document
  .querySelector("#location")
  .addEventListener("focusout", locationValidation);
// document.querySelector("#project").addEventListener("focusout");
document
  .querySelector("#message")
  .addEventListener("focusout", messageValidation);
document.querySelector("#submit").addEventListener("click", validateForm);
