window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    // Here's the first log we added.
    console.log("verbInput = " + verbInput);
    const nounInput = document.getElementById("nounInput").value;

    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person1b").innerText = person1Input;
    document.querySelector("span#person1c").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#person2b").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    // Here are the 3 new logs!
    console.log("Correctly targeting <span>? = ", document.querySelector("span#verb"));
    console.log("Correctly targeting innerText? = ", document.querySelector("span#verb").inerText);
    document.querySelector("span#verb").inerText = verbInput;
    console.log("Correctly referencing verbInput and assigning value of innerText? = ", document.querySelector("span#verb").inerText);
    // Above are the 3 new logs!
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;

    document.querySelector("div#story").removeAttribute("class");
  };
};