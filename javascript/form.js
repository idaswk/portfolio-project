/* --------- */
/* VARIABLES */
/* --------- */

// Query selector of the lightboxContainer
const lightboxContainer = document.querySelector(".lightbox-container");
// Query selector of the "close"-button
const lightboxClose = document.querySelector(".close");
// Query selector of the "home"-button
const lightboxHome = document.querySelector(".home");

// Query Selectors of each input field
const titleInput = document.querySelector("#title");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postal-code");
const areaInput = document.querySelector("#area");
const serviceInput = document.querySelector("#service");
const fileInput = document.querySelector("#details");
const messageInput = document.querySelector("#message");
const formSubmit = document.querySelector("#submit");

// RegExes
// const nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/;
const nameRegEx =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.’-]+$/;
const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegEx = /^(\+|00)(?:[0-9] ?){6,14}[0-9]$/;
const zipRegExGeneral = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
const zipRegExCanada = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const zipRegExUK =
  /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;

// Query Selectors of select-tags
const selectTags = document.getElementsByTagName("select");
const inputsOnSubmit = document.querySelectorAll(
  "input:not(#submit), #message"
);

// Setting the standard input value of the dropdown menus in case of no user selection
let title = titleInput[0];
let service = serviceInput[0];

// Variables for collecting values of user input
let firstName, lastName, email, phone, address, postalCode, area, file, message;

// Objects for colleting the variables defined before
let data = {};
let validationErrors = {};

/* --------- */
/* FUNCTIONS */
/* --------- */

// Function that initializes the validationErrors
const validationErrorsInitializer = () => {
  validationErrors = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    address: undefined,
    postalCode: undefined,
    area: undefined,
    message: undefined,
  };
};

// Function that adds the class "active" to lightboxContainer
const openLightbox = () => {
  lightboxContainer.classList.add("active");
};

// Function that removes the class "active" from lightboxContainer
const closeLightbox = () => {
  lightboxContainer.classList.remove("active");
};

// Function that detects if there are any error messages present
// This can be used for each individual validation function
const detectErrorMessage = (containerName) => {
  if (document.querySelector(`.${containerName} span`)) {
    // Deleting error message in case one is already present
    document
      .querySelectorAll(`.${containerName} span`)
      .forEach((spanElement) => {
        spanElement.remove();
      });
  }
};

// Function that allows display of the error message below
// each input field
const displayErrorMessage = (errorMessage, containerName, idSelector) => {
  // Creating the error message
  const errorDisplay = document.createElement("span");
  // Setting the inner text of the error message
  errorDisplay.innerHTML = `${errorMessage}`;
  // Defining where the message will appear
  document.querySelector(`.${containerName} label`).after(errorDisplay);
  // Setting the style of the error message
  document.querySelector(`#${idSelector}`).style.borderBottomColor =
    "var(--red)";
};

// Function that styles the bottom border when input is valid
const styleConfirmation = (inputSelector) => {
  // Setting the style of the input field
  inputSelector.style.borderBottom = "solid 1px var(--green)";
};

// Function that removes message below submit
const removeSubmitMessage = () => {
  setTimeout(() => {
    // Removing the span element below the submit button
    // after 5s (5000ms)
    document.querySelector(".submit-container span").remove();
  }, 5000);
};

// Function that takes the value of the chosen dropdown
// selection of "title"
const titleSelection = () => {
  title = titleInput.value;
};

// Function that validates the firstName input
const firstNameValidation = () => {
  // Checking to see if an error message is already
  // present in given container
  detectErrorMessage("first-name-container");

  firstName = firstNameInput.value;
  // If no first name is provided
  if (!firstName) {
    console.error("No first name provided");
    // Defining error message that will appear
    validationErrors.firstName = "Please provide a first name";
    // Deleting error message in case one is already present
    detectErrorMessage();
    // Displaying new error message
    displayErrorMessage(
      validationErrors.firstName,
      "first-name-container",
      "first-name"
    );
  } else {
    // If first name syntax does not match RegEx search pattern
    if (!nameRegEx.test(firstName)) {
      console.error("Invalid first name");
      // Defining error message that will appear
      validationErrors.firstName =
        "Invalid format - please avoid special characters";
      // Deleting error message in case one is already present
      detectErrorMessage();
      // Displaying new error message
      displayErrorMessage(
        validationErrors.firstName,
        "first-name-container",
        "first-name"
      );
    } else {
      // If first name syntax is matched to RegEx search pattern
      console.info(`First name (${firstName}) is valid`);
      // Deleting firstName in validationErrors object
      delete validationErrors.firstName;
      // Deleting error message in case one is present
      detectErrorMessage();
      // Changing style of input field
      styleConfirmation(firstNameInput);
      console.log(validationErrors);
    }
  }
};

// Function that validates the lastName input
// (See "firstNameValidation" for more function clarification)
const lastNameValidation = () => {
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
};

// Function that validates the email input
// (See "firstNameValidation" for more function clarification)
const emailValidation = () => {
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
      validationErrors.email = "Invalid format (john@doe.com)";
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
};

// Function that validates the phone input
// (See "firstNameValidation" for more function clarification)
const phoneValidation = () => {
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
};

// Function that validates the address input
// (See "firstNameValidation" for more function clarification)
const addressValidation = () => {
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
};

// Function that validates the postalCode input
// (See "firstNameValidation" for more function clarification)
const postalCodeValidation = () => {
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
};

// Function that validates the area input
// (See "firstNameValidation" for more function clarification)
const areaValidation = () => {
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
};

// Function that takes the value of the chosen dropdown
// selection of "project"
const serviceSelection = () => {
  service = serviceInput.value;
};

const fileSelection = () => {
  file = fileInput.files[0];
};

// Function that validates the message input
// (See "firstNameValidation" for more function clarification)
const messageValidation = () => {
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
};

// Function that validates the entire form
const validateForm = (event) => {
  event.preventDefault();
  detectErrorMessage("submit-container");

  // data and validationErrors are both objects, because we
  // have defined them as such (data = {}, validationErrors = {})

  // Check to see if there are still any errors
  if (Object.keys(validationErrors).length > 0) {
    // If there are still validation errors, log an error to the console
    console.error("Form is not complete");
    // Create error message
    const submitError = document.createElement("span");
    submitError.innerHTML = "Please complete the form";
    formSubmit.after(submitError);

    // Remove the error message
    removeSubmitMessage();
  } else {
    // If there are no validation errors,
    // send form to back-end (we use console.log because we have not
    // worked with back-end yet)
    console.info("Sending form data to backend");
    openLightbox();

    // (Theoretically) The input data of the user should be sent
    // to the data object we have defined, so we can (theoretically)
    // send this to the back-end.
    data.title = title;
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.phone = phone;
    data.address = address;
    data.postalCode = postalCode;
    data.area = area;
    data.service = service;
    data.file = file;
    data.message = message;

    console.log(data);

    // When the input has been saved, the input fields need to
    // be cleared and their style reset
    inputsOnSubmit.forEach((input) => {
      input.value = "";
      input.style.borderBottom = "1px solid black";
    });

    inputsOnSubmit.forEach((input) => {
      input.style.borderBottom = "1px solid black";
    });

    // Initializing the dropdowns to their original state
    for (var i = 0; i < selectTags.length; i++) {
      selectTags[i].selectedIndex = 0;
    }

    // Resetting the objects to their original state
    data = {};
    validationErrorsInitializer();
  }

  // the object "data" has now been cleared in case of another input
  console.log(data);
  // the object "validationErrors" has been initialized to its original state
  console.log(validationErrors);
};

/* --------------- */
/* EVENT LISTENERS */
/* --------------- */

// Execute the function to initialize the object with validation errors
validationErrorsInitializer();

// Log the inital values of the variables in the objects "data" and "validationErrors"
console.log(data);
console.log(validationErrors);

// Add event listeners (focusout) to all of the individual input fields
titleInput.addEventListener("focusout", titleSelection);
firstNameInput.addEventListener("focusout", firstNameValidation);
lastNameInput.addEventListener("focusout", lastNameValidation);
emailInput.addEventListener("focusout", emailValidation);
phoneInput.addEventListener("focusout", phoneValidation);
addressInput.addEventListener("focusout", addressValidation);
postalCodeInput.addEventListener("focusout", postalCodeValidation);
areaInput.addEventListener("focusout", areaValidation);
serviceInput.addEventListener("focusout", serviceSelection);
fileInput.addEventListener("change", fileSelection);
messageInput.addEventListener("focusout", messageValidation);

// Add event listener (click) to the submit button
formSubmit.addEventListener("click", validateForm);

// Add event listener (click) to the close button and the entire container
lightboxClose.addEventListener("click", closeLightbox);
lightboxContainer.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (e) => {
  // checks to see if the lightboxContainer is active, if not the eventListener
  // will return/exit
  if (!lightboxContainer.classList.contains("active")) return;
  // checks if the escape key is pressed
  if (e.key === "Escape") {
    // if the escape key is pressed, the lightbox will close
    closeLightbox();
  }
});
