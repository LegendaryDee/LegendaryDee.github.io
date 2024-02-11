// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  const showImages = () =>
  {
    let userCommand = document.getElementById("enter-command").value.toLowerCase().trim();

    if(userCommand == "b")
    {
        document.getElementById("original.jpg").src = "images/read.jpg";
    }
    else if (userCommand == "c")
    {
        document.getElementById("original.jpg").src = "images/clown.jpg";
    }
    else if (userCommand == "p")
    {
        document.getElementById("original.jpg").src ="images/birthday.jpg";
    }
    else if (userCommand == "r")
    {
        document.getElementById("original.jpg").src = "images/rain.jpg";
    }
    else if (userCommand == "s")
    {
        document.getElementById("original.jpg").src = "images/shovel.jpg";
    }
    else if (userCommand == "w")
    {
        document.getElementById("original.jpeg").src = "images/work.jpg";
    }
  }

// const changeP = (e) => {
//     e.preventDefault(); //don't go to another page
//     document.getElementById("display").textContent = "Hello Demetrius";
// };

// const showExercise = () => {
//     const color = document.getElementById("enter-command").value.toLowerCase().trim();
//     const moodP = document.getElementById("mood");
//     let mood = "undeterminable";

//     // const showCommand = () => {
//     //     const color = document.getElementById("enter-command").value.toLowerCase().trim();
//     //     const moodP = document.getElementById("mood");
//     //     let mood = "undeterminable";
    
//     //     if (color == "b") {
//     //         document.getElementById("commandImages").src="..images/read.jpg";
//     //     } else if (color == "c") {
//     //         mood.src = "clown.jpg";
//     //     } else if (color == "p") {
//     //         mood.src = "birthday.jpg";
//     //     }
//     //     else if (color == "r") {}
    
//     //     moodP.innerHTML = `You are in a ${mood}`;
//     // }
    
    const evalForm = (e) => {
        e.preventDefault();
        console.log("We did it!!");
    };

    
    
    // function changePic() {   
    //     if( myPic.src === "a.png") {       
    //        myPic.src = "b.png";  
    //      }  else {     
    //         myPic.src = "a.png"; 
    //      } 
    //     }     
//     /*Slider*/
//     var slider = document.getElementById("myRange");
//     var output = document.getElementById("demo");
//     output.innerHTML=slider.value;

//     slider.oninput = function()
//     {
//         output.innerHTML = this.value;
//     }

// }
document.getElementById("enter-command").onkeyup = showImages;
// document.getElementById("form").onsubmit= evalForm;
// document.getElementById("link-click").onclick = changeP;