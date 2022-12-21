

const verificationConfig = {
    pattern: "^[a-zA-Z0-9_]*$",
    minLength: 8,
    maxLength: 40
}

function toggleVisibility() {
    var x = document.getElementById("password-input-field");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function verifyPassword(password) {
    if (!/.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        return `I'm expecting a password with a special character!`;
    }

    if (!/.*[A-Z]/.test(password)) {
        return `I'm expecting a password with an upper-case character!`;
    }

    if (!/.*[a-z]/.test(password)) {
        return `I'm expecting a password with a special character!`;
    }

    if (password.length < 8) {
        return `I'm expecting a password with atleast 8 characters!`;
    }

    if (password.length > 30) {
        return `I'm expecting a string shorter or equal to 30 characters!`;
    }
    
    return ""
}

// Device name field verification.
document.getElementById("password-input-field").addEventListener("input", function(event) {
    e = event.target
    e.setCustomValidity("");

    error_msg = verifyPassword(e.value);
    error_msg_element = document.getElementById("password-input-field-error-msg");

    if (error_msg === "") {
        e.setCustomValidity("");
        error_msg_element.hidden = true;
        e.style.borderColor = "green";
    } else {
        e.style.borderColor = "red";
        error_msg_element.hidden = false;
        e.setCustomValidity(error_msg);
        e.reportValidity();
    }
});