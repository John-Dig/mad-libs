window.onload = function() {
  // first we set up an event handler for the form submission
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // then we print values to the story area;
    // we're hardcoding these values for now
    document.querySelector("span#person1a").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person1b").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person1c").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person2a").innerText = document.getElementById("person2Input").value;
    document.querySelector("span#person2b").innerText = document.getElementById("person2Input").value;
    document.querySelector("span#animal").innerText = document.getElementById("animalInput").value;
    document.querySelector("span#animal").innerText = document.getElementById("animalInput").value;
    document.querySelector("span#verb").innerText = document.getElementById("verbInput").value;
    document.querySelector("span#noun").innerText = document.getElementById("nounInput").value;
    document.querySelector("span#exclamation").innerText = document.getElementById("exclamationInput").value;

    // then we show the story by removing the class attribute
    document.querySelector("div#story").removeAttribute("class");
     // we prevent the default refresh action for the submit event
     event.preventDefault();
  };
};