const numLoop = () => {
    const numList = document.getElementById("num-list");
    numList.innerHTML = "";
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML = " ";

    //get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log(`Looping from ${startNum} to ${endNum}.`);

    if(isNaN(startNum) || isNaN(endNum || startNan.trim() ==""||endNum.trim() ==""))
    {
        errorP.innerHTML = "Enter number(s).";
        return;
    }
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if (startNum >= endNum)
    {
        errorP.innerHTML = "Ending number must be larger than starting number";
        return;
    }

    
    //create sn li for each number
    //and append it to the list
    for(let i=0; i<10; i++)
    {
        // console.log(i);
        const li = document.createElement("li");
        li.innerHTML = `My Number: ${i+1}`;
        numList.append(li);
    }
}
let updateCount;
let counter =0;

const startStopCount = (e) => {
    
    const countP = document.getElementById("count-p");
    // let counter = 0;

    // const updateCount = setInterval(()=>{
    //     counter++;
    //     countP.innerHTML = counter;
    //     if (counter >= 10) {
    //         clearInterval(updateCount);
    //     }
    // }, 1000);

    if (e.target.innerHTML.toLowerCase() == "start")
    {
        e.target.innerHTML = "Stop";

        updateCount = setInterval(() =>
        {
            counter++;
            countP.innerHTML
        })
    }
}
const showDetails = (e) => {
    // console.log(e.target.innerHTML);
    console.log(e.target.getAttribute("rel"));
}
document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li) => {
    // console.log(li);
    li.onclick = showDetails;
});