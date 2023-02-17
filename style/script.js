
const fname = document.querySelector(".fname")
const lname = document.querySelector(".lname")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const password2 = document.querySelector(".password2")
const submitBtn = document.querySelector(".submit-btn")
const imput = document.querySelectorAll(".input")

const nameReg = /^([a-zA-Z0-9-\.]+)$/
const emailReg = /^([a-zA-Z0-9-\.]+)@([a-zA-Z0-9-\.]+)\.([a-z]+)(.[a-z])?$/
const passRange = 8;

fname.addEventListener("input", validateN)
const formArr = [fname, lname, email, password, password2]
function validateN() {

    if (fname.value.trim().match(nameReg)) {
        fname.nextElementSibling.textContent = "this is a valid First name"
        fname.parentElement.classList.remove("wrong") 
        fname.nextElementSibling.style.color = "green"
        fname.nextElementSibling.style.fontSize = "0.8rem"
        fname.nextElementSibling.style.fontStyle = "italic"
        fname.nextElementSibling.style.textAlign = "right"
    }
    else if (fname.value.trim() === "" || fname.value.trim() === null) {
        fname.nextElementSibling.textContent = "First Name cannot be empty"
        fname.parentElement.classList.add("wrong") 
        fname.nextElementSibling.style.color = "red"
        fname.nextElementSibling.style.fontSize = "0.8rem"
        fname.nextElementSibling.style.fontStyle = "italic"
        fname.nextElementSibling.style.textAlign = "right"
        
    } else {
        fname.nextElementSibling.textContent = "enter a valid First name"
        fname.parentElement.classList.add("wrong") 
        fname.parentElement.classList.add("show")
        fname.nextElementSibling.style.color = "red"
        fname.nextElementSibling.style.fontSize = "0.8rem"
        fname.nextElementSibling.style.fontStyle = "italic"
        fname.nextElementSibling.style.textAlign = "right"
    }

    if (lname.value.trim().match(nameReg)) {
        lname.nextElementSibling.textContent = "this is a valid Last Name"
        lname.parentElement.classList.remove("wrong") 
        lname.nextElementSibling.style.color = "green"
        lname.nextElementSibling.style.fontSize = "0.8rem"
        lname.nextElementSibling.style.fontStyle = "italic"
        lname.nextElementSibling.style.textAlign = "right"
    }
    else if (lname.value.trim() === "" || fname.value.trim() === null) {
        lname.nextElementSibling.textContent = "Last name cannot be empty"
        lname.parentElement.classList.add("wrong") 
        lname.nextElementSibling.style.color = "red"
        lname.nextElementSibling.style.fontSize = "0.8rem"
        lname.nextElementSibling.style.fontStyle = "italic"
        lname.nextElementSibling.style.textAlign = "right"
    } else {
        lname.nextElementSibling.textContent = "enter a valid Last name"
        lname.parentElement.classList.add("wrong") 
        lname.nextElementSibling.style.color = "red"
        lname.nextElementSibling.style.fontSize = "0.8rem"
        lname.nextElementSibling.style.fontStyle = "italic"
        lname.nextElementSibling.style.textAlign = "right"

    }
    if (email.value.trim().match(emailReg)) {
        email.nextElementSibling.textContent = " valid email"
        email.parentElement.classList.remove("wrong") 
        email.nextElementSibling.style.color = "green"
        email.nextElementSibling.style.fontSize = "0.8rem"
        email.nextElementSibling.style.fontStyle = "italic"
        email.nextElementSibling.style.textAlign = "right"
    }
    else if (email.value.trim() === "" || email.value.trim() === null) {
        email.nextElementSibling.textContent = "Email cannot be empty"
        email.parentElement.classList.add("wrong") 
        email.nextElementSibling.style.color = "red"
        email.nextElementSibling.style.fontSize = "0.8rem"
        email.nextElementSibling.style.fontStyle = "italic"
        email.nextElementSibling.style.textAlign = "right"
    } else {
        email.nextElementSibling.textContent = "Looks like this is not an email"
        email.parentElement.classList.add("wrong") 
        email.nextElementSibling.style.color = "red"
        email.nextElementSibling.style.fontSize = "0.8rem"
        email.nextElementSibling.style.fontStyle = "italic"
        email.nextElementSibling.style.textAlign = "right"

    }
    if (password.value.trim().length > 8 ) {
        password.nextElementSibling.textContent = "this is a valid Password"
        password.parentElement.classList.remove("wrong") 
        password.nextElementSibling.style.color = "green"
        password.nextElementSibling.style.fontSize = "0.8rem"
        password.nextElementSibling.style.fontStyle = "italic"
        password.nextElementSibling.style.textAlign = "right"
    }
    else if (password.value.trim() === "" || password.value.trim() === null) {
        password.nextElementSibling.textContent = "Password cannot be empty"
        password.parentElement.classList.add("wrong") 
        password.nextElementSibling.style.color = "red"
        password.nextElementSibling.style.fontSize = "0.8rem"
        password.nextElementSibling.style.fontStyle = "italic"
        password.nextElementSibling.style.textAlign = "right"
    } else if(password.value.trim().length < 8 ) {
        password.nextElementSibling.textContent = "Password must be more than 8"
        password.parentElement.classList.add("wrong") 
        password.nextElementSibling.style.color = "red"
        password.nextElementSibling.style.fontSize = "0.8rem"
        password.nextElementSibling.style.fontStyle = "italic"
        password.nextElementSibling.style.textAlign = "right"

    }
}


function checker(e) {

    validateN()
    

}

submitBtn.addEventListener("click", checker)