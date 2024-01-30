/*function doStuff() {
    alert ("doing stuff");
}*/
const doStuff= ()=> {
    const messageP= documentGetElementById("message");
    messageP.innerHTML = "Hello Demetrius";
    messageP.classList.toggle("special");
};

const hideOrange= ()=> {
    document.getElementById("orange").classList.add("hidden");
}
/*alert("hello");*/
document.getElementById("btn-click").onclick = doStuff;
document.getElementById("orange").onclick= hideOrange;
/*clickButton.innerHTML = "DON'T CLICK";*/