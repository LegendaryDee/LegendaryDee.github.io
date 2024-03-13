const submitRacoonForm = () => {
    e.preventDefault(); //don't refresh the page
    
    const form = e.target;
    const racconName = form.elements["raccon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");
    console.log(racconName + "is" +demeanor + "terms checked: " + termsChecked + "Size: " +size);
}

const getRadioValue = (radioName) => {
    let radios = document.getElementsByName(radioName);

    for(let i in radios) {
        if(radios[i].checked)
        {
            return radios[i].value;
        }
    }

    return " ";
}
document.getElementById("form-raccon").onsumbit = submitRacoonForm;