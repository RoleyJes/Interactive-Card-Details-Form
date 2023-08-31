"use strict";
const nameInp = document.querySelector("#nameInp");
const cardName = document.querySelector(".cardName");

const numberInp = document.querySelector("#numberInp");
// numberInp.value = +numberInp.value;
const cardNumber = document.querySelector(".cardNumber");

const monthInp = document.querySelector("#monthInp");
const month = document.querySelector(".month");

const yearInp = document.querySelector("#yearInp");
const year = document.querySelector(".year");

const cvcInp = document.querySelector("#cvcInp");
const cvc = document.querySelector(".cvc");

const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const completed = document.querySelector(".completed");

// Displaying card details in real time
nameInp.addEventListener("keyup", () => {
  cardName.textContent = nameInp.value;
});

numberInp.addEventListener("keyup", (e) => {
  cardNumber.textContent = e.target.value = e.target.value
    .replace(/\s/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

monthInp.addEventListener("keyup", () => {
  month.textContent = monthInp.value;
});

yearInp.addEventListener("keyup", () => {
  year.textContent = yearInp.value;
});

cvcInp.addEventListener("keyup", () => {
  cvc.textContent = cvcInp.value;
});

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

const handleSubmit = function () {
  if (!nameInp.value) {
    setErrorFor(nameInp, "Can't be blank");
  } else if (!/^[A-Za-z]*[A-Za-z ]*$/.test(nameInp.value)) {
    setErrorFor(nameInp, "Must be letters only");
  } else {
    setSuccessFor(nameInp);
  }

  if (!numberInp.value) {
    setErrorFor(numberInp, "Can't be blank");
  } else if (numberInp.value.length < 19) {
    setErrorFor(numberInp, "Must be 16 digits");
    console.log(typeof numberInp.value);
  } else if (!/^(\d+ )*(\d+)$/.test(numberInp.value)) {
    setErrorFor(numberInp, "Wrong format, numbers only");
  } else {
    setSuccessFor(numberInp);
  }

  if (!monthInp.value) {
    setErrorFor(monthInp, "Can't be blank");
  } else if (monthInp.value.length < 2) {
    setErrorFor(monthInp, "Must be 2 digits");
  } else {
    setSuccessFor(monthInp);
  }

  if (!yearInp.value) {
    setErrorFor(yearInp, "Can't be blank");
  } else if (yearInp.value.length < 2) {
    setErrorFor(yearInp, "Must be 2 digits");
  } else {
    setSuccessFor(yearInp);
  }

  if (!cvcInp.value) {
    setErrorFor(cvcInp, "Can't be blank");
  } else if (cvcInp.value.length < 3) {
    setErrorFor(cvcInp, "Must be 3 digits");
  } else {
    setSuccessFor(cvcInp);
  }

  if (
    nameInp.value &&
    numberInp.value &&
    numberInp.value.length === 19 &&
    /^(\d+ )*(\d+)$/.test(numberInp.value) &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value
  ) {
    form.classList.add("hidden");
    completed.classList.remove("hidden");
  }
};

function setErrorFor(input, msg) {
  input.style.borderColor = "#FF5252";
  input.nextElementSibling.classList.remove("hidden");
  input.nextElementSibling.textContent = msg;
}

function setSuccessFor(input) {
  input.nextElementSibling.classList.add("hidden");
  input.style.borderImageSource = "linear-gradient(to right, #6448fe, #600594)";
  input.style.borderImageSlice = "1";
}

const thankYou = document.querySelector(".thankYou");
thankYou.addEventListener("click", () => {
  form.classList.remove("hidden");
  completed.classList.add("hidden");
  nameInp.value = "";
  nameInp.style.borderColor = "#DEDDDF";
  nameInp.style.borderImageSource = "none";
  cardName.textContent = "Jane Aethelfled";

  numberInp.value = "";
  numberInp.style.borderColor = "#DEDDDF";
  numberInp.style.borderImageSource = "none";
  cardNumber.textContent = "0000 0000 0000 0000";

  monthInp.value = "";
  monthInp.style.borderColor = "#DEDDDF";
  monthInp.style.borderImageSource = "none";
  month.textContent = "00";

  yearInp.value = "";
  yearInp.style.borderColor = "#DEDDDF";
  yearInp.style.borderImageSource = "none";
  year.textContent = "00";

  cvcInp.value = "";
  cvcInp.style.borderColor = "#DEDDDF";
  cvcInp.style.borderImageSource = "none";
  cvc.textContent = "000";
});
