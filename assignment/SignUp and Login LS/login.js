



let form = document.querySelector("form")
let userData = JSON.parse(localStorage.getItem("userData")) || [];
form.addEventListener("submit",function(){
    event.preventDefault();
    let data = {
        mail:form.email.value,
        pass:form.pass.value
    }
    if(checkSignin(data.mail,data.pass)== true){
        localStorage.setItem("signin",JSON.stringify(data))
        alert("LogIn successful")
    }
    else{
        alert("Wrong Username or Password");
    }

})

function checkSignin(mail,pass){
    let filtered = userData.filter(function(el){
        return el.email === email && el.password === pass

    })
    if(filtered.length>0){
        return false;
    }
    else{
        return true;
    }
}