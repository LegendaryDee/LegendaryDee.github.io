
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
 
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  let rangevalue = document.getElementById("myRange");
  let setvalue = document.getElementById("rangevalue");
  let imgchangevalue = document.getElementById("imgChange");
   rangevalue.oninput = () => 
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

    const showImages = () =>
  {
    let userCommand = document.getElementById("command-textbox").value.toLowerCase().trim();

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
  var div = document.getElementById("ex1")
  var display = 0;
  const exercise01 = () =>
  {
    if (display == 1)
        {
            div.style.display = "block";
            display = 0;
        }
        else
        {
            div.style.display = "none";
            display = 1;
        }
  }

  
document.getElementById("command-textbox").onkeyup = showImages;
// document.getElementById("value").