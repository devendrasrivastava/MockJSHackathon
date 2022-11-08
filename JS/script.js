
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
        alert("Please enter only 8 digits of your Account Number");
        accountNumber.focus();
        return false;
      }

//for address
    let useraddress2 = useraddress.value.trim();
    if (!/^[a-z A-Z 0-9 ,\.]{20,}$/.test(useraddress2)) {
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

    
  //for  mobile no.
    // if (mobileNumber.value == "" || mobileNumber.value.length < 10) {
    //   alert("Only numbers are allowed for mobile number field starting with 6 to 9");
    //   mobileNumber.focus();
    //   return false;
    // }
  
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
      alert('password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter. Both passwords should match')
      return false;
    }
  }
  
  
  