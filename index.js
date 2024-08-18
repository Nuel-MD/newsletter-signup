const button1 = document.querySelector('.content button');
const button2 = document.querySelector('#pop button');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button1.addEventListener('click', displayPopup);
function displayPopup() {
    var emailValue = document.querySelector('input').value;

    if (!emailPattern.test(emailValue)) {
        document.querySelector("label span").style.display = "block";
        document.getElementById("email").style.color = "hsl(4, 100%, 67%)";
        document.getElementById("email").style.borderColor = "hsl(4, 100%, 67%)";
        document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 67%, 0.5)";
    } else {
        document.getElementById("Container").style.display = "none";
        document.getElementById("pop").classList.add("success");
        console.log('Class added:', document.getElementById("pop").classList);
    }
}

button2.addEventListener('click', removePopup);
function removePopup() {
    document.getElementById("Container").style.display = "flex";
    document.getElementById("pop").classList.remove("success");
    location.reload();
}
