let btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click", function(){
    let userName = document.querySelector('input[type = "text"]').value;
    let password = document.querySelector('psw').value;
    if(userName && password){
            localStorage.setItem("username", userName);
            localStorage.setItem("password", password);
            window.close();
    }
    else{
        alert("per cortesia inserire i dati");
    }
})