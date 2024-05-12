// var pass1 = "pass"

// function check(){
//     var pass2 = document.getElementById("password").value;
//     if(pass1 == pass2){
//         document.getElementById("button").disabled = false;
//     }
// }


const correctPassword = "alumnifinder";

// Function to check if the entered password is correct
function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const submitButton1 = document.getElementById("button1");
    const submitButton2 = document.getElementById("button2");
    const submitButton3 = document.getElementById("button3");

    if (enteredPassword === correctPassword) {
        submitButton1.disabled = false;
        submitButton2.disabled = false;
        submitButton3.disabled = false;
    } else {
        submitButton1.disabled = true;
        submitButton2.disabled = true;
        submitButton3.disabled = true;
    }
}

// Add event listener to input field to check password on input change
document.getElementById("password").addEventListener("input", checkPassword);