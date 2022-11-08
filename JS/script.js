//form validations:

function validation() {

  let pass1 = document.getElementById("cexampleInputPassword1");
  let submitemail = document.getElementById("exampleInputEmail1");
  let mobileNumber = document.getElementById("exampleInputMobile")
  let userFName = document.getElementById("exampleInputFName");
  let userLName = document.getElementById("exampleInputLName");
  let accountNumber = document.getElementById("accountNumber");
  let useraddress = document.getElementById("exampleInputAddress");



  //for name
  let userFName2 = userFName.value.trim();
  if (!/^[a-z A-Z \.]{3,}$/.test(userFName2)) {
    alert("Please enter valid first name");
    userFName.focus();
    return false;
  }

  //for last name
  let userLName2 = userLName.value.trim();
  if (!/^[a-z A-Z \.]{3,}$/.test(userLName2)) {
    alert("Please enter valid last name");
    userLName.focus();
    return false;
  }

  //for account number
  if (!/^[0-9]{8}$/.test(accountNumber.value)) {
    alert("Please enter 8 digits of your Account Number");
    accountNumber.focus();
    return false;
  }

  //for address
  let useraddress2 = useraddress.value.trim();
  if (!/^[a-z A-Z 0-9 .,\.]{10,}$/.test(useraddress2)) {
    alert("Please enter valid address with atleast 20 characters, symbols not allowed");
    useraddress.focus();
    return false;
  }

  //for email 

  if (!/^([a-zA-Z 0-9\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/.test(submitemail.value)) {
    alert("Please enter valid email address");
    submitemail.focus();
    return false;
  }

//for mobile
  if (!/^[6-9][0-9]{9}$/.test(mobileNumber.value)) {
    alert("Only numbers are allowed for mobile number field starting with 6 to 9");
    mobileNumber.focus();
    return false;
  }

  //To check a password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (pass1.value.match(passw)) {
    return true;
  }
  else {
    alert('password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.')
    return false;
  }
}

//form validations end here
////////////////////////////////////////////////////////////////////////////////////////////////


//sign up page data post to db.json server starts here
////////////////////////////

let form = document.getElementById('form')
form.addEventListener('submit', function (e) {
  //auto submission of form

  e.preventDefault()
  let fname = document.getElementById('exampleInputFName').value
  let lname = document.getElementById('exampleInputLName').value
  let accnumber = document.getElementById('accountNumber').value
  let address = document.getElementById('exampleInputAddress').value
  let email = document.getElementById('exampleInputEmail1').value
  let mobile = document.getElementById('exampleInputMobile').value
  let passw = document.getElementById('cexampleInputPassword1').value


  //fetch post request

  fetch("http://localhost:3000/CustomerData", {
    method: 'POST',
    body: JSON.stringify({
      fname: fname,
      lname: lname,
      address: address,
      accnumber: accnumber,
      email: email,
      mobile: mobile,
      passw: passw

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
      var results = document.getElementById('results')
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
        if (data[0].passw === password) {
          console.log("Success");
          return true;
        }
        else {
          alert("Incorrect Password")
        }
      })
  }
}
/////////////////////////////
//login script validation ends