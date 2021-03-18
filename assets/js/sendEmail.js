function sendMail(contactForm) { // send email function using the variables entered in the modal //
    emailjs.send("service_r2tie2q", "VWCC", { // the service associated with my emal js account and the name/template ID //
        "from_name": contactForm.name.value, // name taken from name box //
        "from_email": contactForm.emailaddress.value, // email taken from email box //
        "project_request": contactForm.coupon.value // coupon taken from coupon box //
    }, $('#couponTextEntry')[0].reset()) // emptying of the entry fields 0.5 seconds later //
        .then(
            function (response) {
                $('#successResponse').html('Success! Your Email Has Been Sent. A member of the team will be in touch with you shortly.'), // response confirmation that email has been sent //
                    $('#successResponse').addClass('highlight'), // change the text to green to signify this //
                    console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page //
}