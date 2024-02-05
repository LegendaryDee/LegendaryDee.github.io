const doStuff= ()=> {
    const messageP= documentGetElementById("message");
    messageP.innerHTML = "Hello Demetrius";
    messageP.classList.toggle("special");
};

const hideOrange= ()=>  {
    document.getElementById("orange").classList.add("hidden");
}

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
    //document.querySelector("#square")
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {
    //input a valid color
    const color = document.getElementById("txt-color").value;
   

    const playground = document.getElementById("circle-playground");

  

    const ball = document.createElement("section");
    playground.append(ball);
    ball.classList.add("circle");
    //changes color of 1 star
    ball.style.background = color;

};


document.getElementById("btn-add-circle").onclick = addCircle;
document.getElementById("btn-click").onclick = doStuff;
document.getElementById("orange").onclick= hideOrange;
