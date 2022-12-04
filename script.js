const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const labelFirst = document.querySelector("#labelFirst");
const labelLast = document.querySelector("#labelLast");
const labelEmail = document.querySelector("#labelEmail");
const labelPassword = document.querySelector("#labelPassword");

const arrInput = [firstName, lastName, email, password];
const arrLabel = [labelFirst, labelLast, labelEmail, labelPassword];

const wrongEmail = "Looks like this not an email";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 0; i < arrInput.length; i++) {
    arrInput[i].value == ""
      ? arrInput[i].classList.add("alert") &
        arrLabel[i].classList.remove("d-none")
      : arrInput[i].classList.remove("alert") &
        arrLabel[i].classList.add("d-none");
  }

  if (
    (arrInput[0].value != "") &
    (arrInput[1].value != "") &
    (arrInput[2].value != "") &
    (arrInput[3].value != "")
  ) {
    if (
      arrInput[2].value.indexOf("@") != -1 &&
      arrInput[2].value.indexOf(".") != -1
    ) {
      alert(
        "First Name : " +
          arrInput[0].value +
          "\nLast Name : " +
          arrInput[1].value +
          "\nEmail : " +
          arrInput[2].value
      );
    } else {
      email.classList.add("alert");
      email.style.color = "#ff7979";
      labelEmail.innerHTML = wrongEmail;
      labelEmail.classList.remove("d-none");
    }
  }
});

for (let i = 0; i < arrInput.length; i++) {
  arrInput[i].addEventListener("keyup", (e) => {
    e.preventDefault();
    arrInput[i].value == ""
      ? arrLabel[i].classList.remove("d-none") &
        arrInput[i].classList.add("alert")
      : arrLabel[i].classList.add("d-none") &
        arrInput[i].classList.remove("alert") &
        (arrInput[i].style.color = "#3e3c49");
  });
}
