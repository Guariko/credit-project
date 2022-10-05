const maxInputLength = 11;
const spaceKeyCode = 32;
const enterKeyCode = 13;
const backSpaceKeyCode = 8;

const saldo = document.getElementById("saldo");

saldo.addEventListener("keydown", (e) => {
  const keyPressed = e.key;

  if (e.keyCode === spaceKeyCode) {
    e.preventDefault();
  }

  if (isNaN(keyPressed)) {
    if (e.keyCode !== enterKeyCode && e.keyCode !== backSpaceKeyCode) {
      e.preventDefault();
    }
  }

  if (saldo.value.length >= maxInputLength) {
    if (e.keyCode !== enterKeyCode && e.keyCode !== backSpaceKeyCode) {
      e.preventDefault();
    }
  }
});

const classToHideElement = "hide";
const classToDisplayElement = "active";

const creditContent = document.querySelector(".credit__generator__content");
const simulationDoneContainer = document.querySelector(".simulation");

const creditForm = document.getElementById("credit__form");

creditForm.addEventListener("submit", (e) => {
  const inputValue = saldo.value;
  const noDisplay = document.querySelectorAll(".error__happen");
  const simulationErrorMessage = document.querySelector(".simulation__error");

  if (parseInt(inputValue) >= 300) {
    let creditValue = inputValue * 0.6;
    noDisplay.forEach((noShow) => {
      removeClass(noShow, classToHideElement);
    });

    const result = document.querySelector(".result");
    result.innerHTML = creditValue;
    removeClass(simulationErrorMessage, classToDisplayElement);
  } else {
    noDisplay.forEach((noShow) => {
      addClass(noShow, classToHideElement);
    });
    addClass(simulationErrorMessage, classToDisplayElement);
  }
  addClass(creditForm, classToHideElement);
  addClass(creditContent, classToHideElement);
  addClass(simulationDoneContainer, classToDisplayElement);

  e.preventDefault();
});

const tryAgain = document.querySelector(".try__again");

tryAgain.addEventListener("click", (e) => {
  removeClass(creditForm, classToHideElement);
  removeClass(creditContent, classToHideElement);
  removeClass(simulationDoneContainer, classToDisplayElement);

  saldo.value = null;
});

const ua = detect.parse(navigator.userAgent);
const appButton = document.querySelector(".app");

if (ua.device.family === "iPhone") {
  appButton.setAttribute(
    "href",
    "https://apps.apple.com/br/app/fgts/id1038441027"
  );
} else {
  appButton.setAttribute(
    "href",
    "https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador&hl=pt_BR&gl=US"
  );
}

/* TODO: Functions start */

function addClass(elementToUse, classToAdd) {
  elementToUse.classList.add(classToAdd);
}

function removeClass(elementToUse, classToRemove) {
  elementToUse.classList.remove(classToRemove);
}

/* FIXME: Functions end */
