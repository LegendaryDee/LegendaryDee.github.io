
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
 
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  var d = document.getElementById("move-ball");
  var position= 0;
  var animate = setInterval(function() {
    position += 5;
    d.style.top= position + "px";
    d.style.bottom = position + "px";
  }, 100)

  function stop()
  {
    clearInterval(animate);
  }
