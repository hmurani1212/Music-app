console.log("Welcome to login Page");
const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const useremail = localStorage.getItem("useremail")
    const userpassword = localStorage.getItem("userpassword");
    const errorform = document.getElementById("errorform")
    errorform.style.color = "red";
    if (!email || !password) {
        return errorform.innerHTML = "Please Fill are require feilds"
    }
    if (email === useremail && password === userpassword) {
        return    window.location.href = "Home.html"
      
    }
    else {
        return errorform.innerHTML = "Enter Correct Email and password"
    }

})
// document.getElementById("view").addEventListener('click', () => {
//     const password = document.getElementById("password");
//     if (password.type = "password") {
//         password.type = "text";
//         console.log(password)
//     } else {
//         const password = document.getElementById("password");
//         password.type = "password"
//     }
// });


