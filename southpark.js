"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const craig = await getCharacter("Data/craig.json");

//   const data = getData();
//   showAllCharacters(data);
  showCharacter(craig);
}

function showCharacter(character) {
    console.log("test")
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>Gender: ${character.gender}</p>
                <p>Voiced by ${character.voicedBy}</p>
            </article>
        `
  );
  console.log(character)

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    document.querySelector("#dialog-box").insertAdjacentHTML(
      "afterbegin" /*html*/,
      `
      <img src
    `
    );
    document.querySelector("dialog").showModal();
  }
}


async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

// function getData() {
//   const data = [];
//   return data;
// }

// function showAllCharacters(list) {
//   showCharacter(character);
// }


// function showInfo(character) {}

// function hideInfo() {}

// // helper functions
// function getDescription() {}

// function formatDate(dateOfBirth) {}

// function calcage(dateOfBirth) {}
