const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const submit = document.querySelector("#submit")

let emails = ["jossa"]
let password = ["hello"]
let emailStudent = ["student"]
let passStudent = ["password"]

if (localStorage.getItem('loggedInUser')) {
    window.location.href = 'index.html'; // Redirect to dashboard if logged in
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    

    if(email.value==emails[0]&&pass.value==password[0]){
        window.open("admin.html", "_self")
        localStorage.setItem('loggedInUser', JSON.stringify(emails));
        console.log("Log-in Successful")
    }else if(email.value===emailStudent[0]&&pass.value===passStudent[0]){
        window.open("dashboard.html", "_self")
        localStorage.setItem('loggedInUser', JSON.stringify(emailStudent));
        console.log("Log-in Successful")
    }else{
        alert("Wrong email or password")
        console.log("Wrong email or password")
    }
})