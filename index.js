function sendMail() {
    var params = {
        form_name: document.getElementById("name").value,
        form_email: document.getElementById("email").value,
        form_phone: document.getElementById("phone").value,
        form_message: document.getElementById("message").value,
    };

    const serviceID = "service_5s3ilth";
    const templateID = "template_yjbj8ah";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}