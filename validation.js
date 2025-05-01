// Updated validation.js
function validateContactForm() {
    const form = document.contactForm;
    
    // Validate First Name
    if (form.fname.value.trim() === "") {
        alert("Please provide your first name!");
        form.fname.focus();
        return false;
    }

    // Validate Last Name
    if (form.lname.value.trim() === "") {
        alert("Please provide your last name!");
        form.lname.focus();
        return false;
    }

    // Validate Email
    const email = form.emailAddress.value.trim();
    if (email === "") {
        alert("Please provide your email address!");
        form.emailAddress.focus();
        return false;
    }

    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please provide a correct email address!");
        form.emailAddress.focus();
        return false;
    }

    // Validate Subject
    if (form.subject.value.trim() === "") {
        alert("Please provide a subject!");
        form.subject.focus();
        return false;
    }

    // Validate Message
    if (form.message.value.trim() === "") {
        alert("Please provide your message!");
        form.message.focus();
        return false;
    }

    return true;
}

function validateVolunteerForm() {
    const form = document.volunteerForm;
    
    // Validate Full Name
    if (form.name.value.trim() === "") {
        alert("Please provide your full name!");
        form.name.focus();
        return false;
    }

    // Validate Phone Number
    const phone = form.phone.value.trim();
    if (phone === "") {
        alert("Please provide your phone number!");
        form.phone.focus();
        return false;
    }
    
    // Basic phone number validation (Malaysian format)
    const phoneRegex = /^0\d{1,2}-\d{7,8}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please provide a valid phone number (e.g., 012-3456789)!");
        form.phone.focus();
        return false;
    }

    // Validate Email
    const email = form.email.value.trim();
    if (email === "") {
        alert("Please provide your email address!");
        form.email.focus();
        return false;
    }

    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please provide a correct email address!");
        form.email.focus();
        return false;
    }

    // Validate Volunteer Area
    if (form.area.value.trim() === "") {
        alert("Please provide the area you can volunteer in!");
        form.area.focus();
        return false;
    }

    // Validate Availability
    if (form.availability.value.trim() === "") {
        alert("Please provide your availability!");
        form.availability.focus();
        return false;
    }

    return true;
}