const showEmailResult = (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();

    if(response.status ==200)
    {
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML
    }

};
const getEmailResult = async() => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json= JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait..";

    try {
        const response = await fetch("https;//api.webforms.com/submit"), {
        method: "POST";
        headers: {
            "Content-Type": "application/json";
            Accept: "application/json"
        }
        });
        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, cannot send email";
    }
};
document.getElementById("contact-form").onsubmit = showEmailResult;