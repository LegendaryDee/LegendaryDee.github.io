// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

const changeP = (e) => {
    e.preventDefault(); //don't go to another page
    document.getElementById("display").textContent = "Hello Demetrius";
};

const showExercise = () => {
    const color = document.getElementById("txt-command").value.toLowerCase().trim();
    const moodP = document.getElementById("mood");
    let mood = "undeterminable";

    if (color == "b") {
        mood = "Read a book";
    } else if (color == "c") {
        mood = "Act like a clown";
    } else if (color == "p") {
        mood = "Have a birthday party";
    }
    else if (color == "r") {
        mood == "Walk in the rain"
    }
    else if (color == "s")
    {
        mood == "shovel up some dirt";
    }
    else if (color == "w") {
        mood == "go to work"
    }
    

    /*Slider*/
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML=slider.value;

    slider.oninput = function()
    {
        output.innerHTML = this.value;
    }

}
document.getElementById("txt-command").onkeyup = showExercise;