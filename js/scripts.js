window.addEventListener("load", function() {
  
  let form = document.querySelector("form");
  let resetBtn =document.getElementById("reset");
  let story = document.getElementById("story");


  form.addEventListener("submit", function() {
   
    reset.removeAttribute("class");
  });
  form.addEventListener("submit", function(e){
    e.preventDefault();
    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");
    //inputting answers into story
    document.querySelector("span#person1a").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person1b").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person1c").innerText = document.getElementById("person1Input").value;
    document.querySelector("span#person2a").innerText = document.getElementById("person2Input").value
    document.querySelector("span#person2b").innerText = document.getElementById("person2Input").value;
    document.querySelector("span#animal").innerText = document.getElementById("animalInput").value;
    document.querySelector("span#animal").innerText = document.getElementById("animalInput").value;
    document.querySelector("span#verb").innerText = document.getElementById("verbInput").value;
    document.querySelector("span#noun").innerText = document.getElementById("nounInput").value;
    document.querySelector("span#exclamation").innerText = document.getElementById("exclamationInput").value;
    story.removeAttribute("class");
    story.setAttribute("class","showing");
  });
  resetBtn.addEventListener("click", function(){
    story.setAttribute("class", "hidden");
    resetBtn.setAttribute("class", "hidden");
    //reset form values
    document.getElementById("person1Input").value= null;
    document.getElementById("person2Input").value= null;
    document.getElementById("animalInput").value= null;
    document.getElementById("verbInput").value= null;
    document.getElementById("nounInput").value= null;
    document.getElementById("exclamationInput").value= null;
  });
});  