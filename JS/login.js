let btnLogin = document.getElementById("loginSubmitButton");
btnLogin.onclick = login;

// var currentUser = 0;

function login() {
    console.log("login");
    let email = document.getElementById("exampleInputEmail33").value;
    let password = document.getElementById("exampleInputPassword3").value;
    if (email === "") {
        alert("Please enter your email id field and try again");
    }
    else if (password === "") {
        alert("password missing");

    }
    else {

        fetch(`http://localhost:3000/StudentData?email=${email}`)
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.length===0){
                alert("Email address does not exist")
            }
            if(data[0].passw===password){
                console.log("Success");
                return true;
            }
            else{
                alert("Incorrect Password")
            }
           })





        // let emailFound = false;
        // fetch(`http://localhost:3000/StudentData?email=${email}`)
        //     .then(data => {
        //         return data.json();
        //     })
        //     .then(data_json => {
        //         data_json.forEach(user => {
        //             console.log(user.email);
        //             if (email === user.email) {
        //                 console.log("User Found");
        //                 emailFound = true;
        //                 if (password === user.password) {
        //                     console.log("Correct Password");
        //                     alert(messages.loginSuccess);
        //                     reset();
        //                     // Move to Home Page........
        //                     sessionStorage.setItem("currentUser", user.email);
        //                     location.href = "index.html";
        //                 }
        //                 else {
        //                     console.log("Incorrect Password");
        //                     alert(messages.incorrectPassword);
        //                     document.getElementById("exampleInputPassword3").value = "";
        //                 }
        //             }
        //         });
        //         if (emailFound === false) {
        //             alert(messages.signup);
        //             reset();
        //             switchToRegister();
        //         }
        //     })
           
    }
}


