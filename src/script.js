console.log("Welcome to my design");
const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorform = document.getElementById("errorform")
    if (!name || !email || !password) {
        errorform.style.color = "red";
        return errorform.innerHTML = "Please Fill are require feilds"
    }
    else {
        localStorage.setItem("username", name.trim());
        localStorage.setItem("useremail", email.trim());
        localStorage.setItem("userpassword", password);
        window.location.href = "Login.html"
    }

})


document.getElementById("view").addEventListener('click', () => {
    console.log("I am related to your password")
})
document.getElementById("view").addEventListener('click', () => {
    const password = document.getElementById("password");
    if (password.type = "password") {
        password.type = "text";
        console.log(password)
    } else {
        const password = document.getElementById("password");
        password.type = "password"
    }
});


const getDat = localStorage.getItem("useremail");
const getHome =() =>{
    if (!getDat) {
        window.location.href = "index.html"
    } else {
        window.location.href = "Home.html"
    }
} ;
// setTimeout(() => {
//     getHome()
// }, 5);
