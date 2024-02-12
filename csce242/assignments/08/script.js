
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
 
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  const showImages = () =>
  {
    let userCommand = document.getElementById("enter-command").value.toLowerCase().trim();

    if(userCommand == "b")
    {
        document.getElementById("commandImages").src = "images/read.jpg";
    }
    else if (userCommand == "c")
    {
        document.getElementById("commandImages").src = "images/clown.jpg";
    }
    else if (userCommand == "p")
    {
        document.getElementById("commandImages").src = "images/birthday.jpg";
    }
    else if (userCommand == "r")
    {
        document.getElementById("commandImages").src = "images/rain.jpg";
    }
    else if (userCommand == "s")
    {
        document.getElementById("commandImages").src = "images/shovel.jpg";
    }
    else if (userCommand == "w")
    {
        document.getElementById("commandImages").src = "images/work.jpg";
    }
  }
  let rangevalue = document.getElementById("myRange");
  let setvalue = document.getElementById("rangevalue");
  let imgchangevalue = document.getElementById("imgChange")
  rangevalue.oninput = function()
  {
      let getvalue = rangevalue.value;
      setvalue.innerHTML = this.value;
      if(getvalue > 0 && getvalue < 9)
      {
          imgchangevalue.setAttribute("src","images/yoga1.jpg")
      }
      else if (getvalue >=  10 && getvalue <= 20)
      {
          imgchangevalue.setAttribute("src","images/yoga2.jpg")
      }
      else if (getvalue >= 21 && getvalue <=31)
      {
          imgchangevalue.setAttribute("src","images/yoga3.jpg")
      }
      else if (getvalue >= 32 && getvalue <=42)
      {
          imgchangevalue.setAttribute("src","images/yoga4.jpg")
      }
      else if (getvalue >= 43 && getvalue <=53)
      {
          imgchangevalue.setAttribute("src","images/yoga5.jpg")
      }
      else if (getvalue >= 54 && getvalue <=64)
      {
          imgchangevalue.setAttribute("src","images/yoga6.jpg")
      }
      else if (getvalue >= 65 && getvalue <=75)
      {
          imgchangevalue.setAttribute("src","images/yoga7.jpg")
      }
      else if (getvalue >= 76 && getvalue <=86)
      {
          imgchangevalue.setAttribute("src","images/yoga8.jpg")
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
    
    // const evalForm = (e) => {
    //     e.preventDefault();
    //     console.log("We did it!!");
    // };

    
    
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
document.getElementById("form").onsubmit= evalForm;
document.getElementById("link-click").onclick = changeP;