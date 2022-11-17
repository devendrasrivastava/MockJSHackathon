document.getElementById('uname').addEventListener('keyup', function () {
  var uname = document.getElementById('uname').value
  var exp1 = /^[a-z A-Z \.]{3,}$/
  if (exp1.test(uname.trim())) {
    document.getElementById('uname').className = 'valid form-control'
    document.getElementById('uname').style.border = '2px solid green'
    document.getElementById('para1').style.visibility = 'hidden'
  } else {
    document.getElementById('uname').className = 'Invalid form-control'
    document.getElementById('para1').style.visibility = 'visible'
    document.getElementById('uname').style.border = '2px solid red'
  }
})

document.getElementById('accnumber').addEventListener('keyup', function () {
  var accnumber = document.getElementById('accnumber').value
  var exp2 = /^[0-9]{8}$/
  if (exp2.test(accnumber)) {
    document.getElementById('accnumber').className = 'valid form-control'
    document.getElementById('accnumber').style.border = '2px solid green'
    document.getElementById('para2').style.visibility = 'hidden'
  } else {
    document.getElementById('accnumber').className = 'Invalid form-control'
    document.getElementById('para2').style.visibility = 'visible'
    document.getElementById('accnumber').style.border = '2px solid red'
  }
})

document.getElementById('address').addEventListener('keyup', function () {
  var address = document.getElementById('address').value
  var exp3 = /^[a-z A-Z 0-9\.]{10,}$/
  if (exp3.test(address.trim())) {
    document.getElementById('address').className = 'valid form-control'
    document.getElementById('address').style.border = '2px solid green'
    document.getElementById('para3').style.visibility = 'hidden'
  } else {
    document.getElementById('address').className = 'Invalid form-control'
    document.getElementById('para3').style.visibility = 'visible'
    document.getElementById('address').style.border = '2px solid red'
  }
})

document.getElementById('email').addEventListener('keyup', function () {
    var email = document.getElementById('email').value
    var exp4 = /^([a-zA-Z\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (exp4.test(email.trim())) {
      document.getElementById('email').className = 'valid form-control'
      document.getElementById('email').style.border = '2px solid green'
      document.getElementById('para4').style.visibility = 'hidden'
    } else {
      document.getElementById('email').className = 'Invalid form-control'
      document.getElementById('para4').style.visibility = 'visible'
      document.getElementById('email').style.border = '2px solid red'
    }
  })

  document.getElementById('mobile').addEventListener('keyup', function () {
    var mobile = document.getElementById('mobile').value
    var exp5 = /^[6-9][0-9]{9}$/
    if (exp5.test(mobile)) {
      document.getElementById('mobile').className = 'valid form-control'
      document.getElementById('mobile').style.border = '2px solid green'
      document.getElementById('para5').style.visibility = 'hidden'
    } else {
      document.getElementById('mobile').className = 'Invalid form-control'
      document.getElementById('para5').style.visibility = 'visible'
      document.getElementById('mobile').style.border = '2px solid red'
    }
  })

  document.getElementById('newPassword').addEventListener('keyup', function () {
    var newPassword = document.getElementById('newPassword').value
    var exp6 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if (exp6.test(newPassword)) {
      document.getElementById('newPassword').className = 'valid form-control'
      document.getElementById('newPassword').style.border = '2px solid green'
      document.getElementById('errorpassword').style.visibility = 'hidden'
    } else {
      document.getElementById('newPassword').className = 'Invalid form-control'
      document.getElementById('errorpassword').style.visibility = 'visible'
      document.getElementById('newPassword').style.border = '2px solid red'
    }
  })


  function formSubmit(input){
    for (index = 0; index < 4; index++) {
        if (document.querySelectorAll('input')[index].getAttribute("class") == 'Invalid' || document.querySelectorAll('input')[index].value == "") {
            alert("Registration not successful")
            return false
        }
    }
    return true
}


/////////////////////////////////////////////////////////////////////

let form = document.getElementById('form')
form.addEventListener('submit', function (e) {
  //auto submission of form

  e.preventDefault()
  let uname = document.getElementById('uname').value
  // let lname = document.getElementById('exampleInputLName').value
  let accnumber = document.getElementById('accnumber').value
  let address = document.getElementById('address').value
  let email = document.getElementById('email').value
  let mobile = document.getElementById('mobile').value
  let newPassword = document.getElementById('newPassword').value


  //fetch post request

  fetch("http://localhost:3000/CustomerData", {
    method: 'POST',
    body: JSON.stringify({
      uname: uname,
      address: address,
      accnumber: accnumber,
      email: email,
      mobile: mobile,
      newPassword: newPassword

    }),
    headers: {
      "content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      // var results = document.getElementById('results')
      // results.innerHTML = `<p> The title of the to do is ${data.title}</P>
      // <p>The body of the to do is ${data.body}</p>`
      alert("Details have been submitted successfully");
    })
})

//sign up form data post method ends here
///////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////
//login script validation starts here

let btnLogin = document.getElementById("loginSubmitButton");
btnLogin.onclick = login;

// var currentUser = 0;

function login() {


let Lform = document.getElementById('loginFormId')
Lform.addEventListener('submit', function (e) {
  //auto submission of form

  e.preventDefault()
  

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

    fetch(`http://localhost:3000/CustomerData?email=${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          alert("Email address does not exist")
        }
        if (data[0].newPassword === password) {
          console.log("Success");
          alert("login successful");
          window.location = "services.html"
          // return true;
        }
        else {
          alert("Incorrect Password")
          // return false;
        }
      })
  }
})
}
/////////////////////////////
//login script validation ends