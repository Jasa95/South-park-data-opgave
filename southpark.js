"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const southParkers = await getCharacter(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
//  southParkers.forEach(showCharacter);

// for of loop  
  for (const southpark of southParkers) {
    showCharacter(southpark)
    
  };
};

function showCharacter(character) {
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
  console.log(character);

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    document.querySelector("#dialog-content").innerHTML = "";
    document.querySelector("#dialog-content").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `

       
      <img src=${character.image}/>
      <div id="div">
        <h3>Name: ${character.name}</h3>
        <p>Nickname: ${character.nickname}</p>
        <p>Age: ${character.age}</p>
        <p>Gender: ${character.gender}</p>
        <p>Occupation: ${character.occupation}</p>
        <p>School grade: ${character.schoolGrade}</p>
        <p>Religion: ${character.religion}</p>
        <p>Catchphrase ${character.catchPhrase}</p>
        <p>Haircolor ${character.hairColor}</p>
        <p>Appearances count ${character.appearances}</p>
        <p>First appearance ${character.firstAppearance}</p>
        <p>Voiced by ${character.voicedBy}</p>
      </div>
      `
    );
    document.querySelector("dialog").showModal();
  };
};

function reset() {
  document.getElementById("div").removeChild();
};

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
