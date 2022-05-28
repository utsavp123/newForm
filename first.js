
jQuery(function ($) {

  $('#tags input').on('focusout', function () {
    var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
    if (txt) $(this).before('<span class="tag">' + txt + '</span>');
    this.value = "";

  }).on('keyup', function (e) {
    // comma|enter (add more keyCodes delimited with | pipe)
    if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
  });

  $('#tags').on('click', '.tag', function () {
    $(this).remove();
  });

});

function myChange(e) {
  var Fname = document.getElementById('fname');
  var Mname = document.getElementById('mname');
  var Lname = document.getElementById('lname');
  Fname.value = Fname.value.toUpperCase();
  Mname.value = Mname.value.toUpperCase();
  Lname.value = Lname.value.toUpperCase();
}

function myFunction() {
  let i;
  let Fname = document.getElementById('fname');
  let Mname = document.getElementById('mname');
  let Lname = document.getElementById('lname');

  if (!Fname.value) {
    document.getElementById('validFname').style.display = 'block';
  } else {
    document.getElementById('validFname').style.display = 'none';
  }
  if (!Mname.value) {
    document.getElementById('validMname').style.display = 'block';
  } else {
    document.getElementById('validMname').style.display = 'none';
  }
  if (!Lname.value) {
    document.getElementById('validLname').style.display = 'block';
  } else {
    document.getElementById('validLname').style.display = 'none';
  }

  let Bdate = document.getElementById('dob');
  if (!Bdate.value) {
    document.getElementById('validBdate').style.display = 'block';
  } else {
    document.getElementById('validBdate').style.display = 'none';
  }

  let Male = document.getElementById('male').checked;
  let Female = document.getElementById('female').checked;
  if (Male == false && Female == false) {
    document.getElementById('validGender').style.display = 'block';
  } else {
    document.getElementById('validGender').style.display = 'none';
  }

  let AddressOne = document.getElementById('addressOne');
  if (!AddressOne.value) {
    document.getElementById('validAddressOne').style.display = 'block';
  } else {
    document.getElementById('validAddressOne').style.display = 'none';
  }
  let AddressTwo = document.getElementById('addressTwo');
  if (!AddressTwo.value) {
    document.getElementById('validAddressTwo').style.display = 'block';
  } else {
    document.getElementById('validAddressTwo').style.display = 'none';
  }

  let Country = document.getElementById('country');
  if (!Country.value) {
    document.getElementById('validCountry').style.display = 'block';
  } else {
    document.getElementById('validCountry').style.display = 'none';
  }
  let State = document.getElementById('state');
  if (!State.value) {
    document.getElementById('validState').style.display = 'block';
  } else {
    document.getElementById('validState').style.display = 'none';
  }
  let City = document.getElementById('city');
  if (!City.value) {
    document.getElementById('validCity').style.display = 'block';
  } else {
    document.getElementById('validCity').style.display = 'none';
  }

  let Pincode = document.getElementById('pinCode');
  if (!Pincode.value || Pincode.value.length != 6) {
    document.getElementById('validPincode').style.display = 'block';
  } else {
    document.getElementById('validPincode').style.display = 'none';
  }

  let Username = document.getElementById('userName');
  if (!Username.value) {
    document.getElementById('validUsername').style.display = 'block';
  } else {
    document.getElementById('validUsername').style.display = 'none';
  }

  let Emailid = document.getElementById('emaiId');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!Emailid.value) {
    document.getElementById('validEmailId').style.display = 'block';
  } else if (Emailid.value.match(mailformat)) {
    document.getElementById('validEmailId').style.display = 'none';
  }

  let Password = document.getElementById('password');
  if (!Password.value) {
    document.getElementById('validPassword').style.display = 'none';
    document.getElementById('validPasswordNone').style.display = 'block';
  } else if (Password.value.length < 8) {
    document.getElementById('validPasswordNone').style.display = 'none';
    document.getElementById('validPassword').style.display = 'block';
  }
  else {
    document.getElementById('validPasswordNone').style.display = 'none';
    document.getElementById('validPassword').style.display = 'none';
  }
  let conPassword = document.getElementById('confPass');
  if (!conPassword.value) {
    document.getElementById('matchPassword').style.display = 'none';
    document.getElementById('validConPassword').style.display = 'block';
  } else if (Password.value != conPassword.value) {
    document.getElementById('validConPassword').style.display = 'none';
    document.getElementById('matchPassword').style.display = 'block';
  }
  else {
    document.getElementById('validConPassword').style.display = 'none';
    document.getElementById('matchPassword').style.display = 'none';

  }

  if (!Fname.value || Password.value != conPassword.value || !conPassword.value || Password.value.length < 8 || !Password.value || !Emailid.value || !Username.value || (!Pincode.value || Pincode.value.length != 6) || !City.value || !State.value || !Country.value || !AddressTwo.value || !AddressOne.value || (Male == false && Female == false) || !Bdate.value || !Lname.value || !Mname.value) {
    return false;
  } else {
    abc = []
    var a = document.getElementById('playGame').checked;
    var b = document.getElementById('exercise').checked;
    var c = document.getElementById('reading1').checked;
    if (a == true) {
      abc.push(document.getElementById('playGame').value);
    }
    if (b == true) {
      abc.push(document.getElementById('exercise').value);
    }
    if (c == true) {
      abc.push(document.getElementById('reading1').value);
    }
    record = JSON.parse(localStorage.getItem("old-users")) ? JSON.parse(localStorage.getItem("old-users")) : [];
    record.push({
      "Fname": Fname.value,
      "Mname": Mname.value,
      "Lname": Lname.value,
      "DOB": Bdate.value,
      "Gender": document.forms['myForm']['gender'].value,
      "Address1": AddressOne.value,
      "Address2": AddressTwo.value,
      "Country": Country.value,
      "State": State.value,
      "City": City.value,
      "PinCode": Pincode.value,
      "Username": Username.value,
      "EmaiId": Emailid.value,
      "Password": Password.value,
      "ConfirmPassword": conPassword.value,
      "Hobby": abc,
    })
    localStorage.setItem("old-users", JSON.stringify(record));





  }

}

function passwordIcon() {

  const togglePassword = document.querySelector("#togglePassword");
  const x = document.getElementById('password');
  if (x.type === "password") {
    x.type = "text";
    togglePassword.classList.toggle("bi-eye");
  } else {
    x.type = "password";
    togglePassword.classList.toggle("bi-eye");
  }

}
function confPassIcon() {
  const togglePassword2 = document.querySelector("#togglePassword2");
  const x = document.getElementById('confPass');
  if (x.type === "password") {
    x.type = "text";
    togglePassword2.classList.toggle("bi-eye");
  } else {
    x.type = "password";
    togglePassword2.classList.toggle("bi-eye");
  }
}

function allCheckBoxClick() {
  let allCheckBox = document.getElementById('allCheckBox').checked;
  if (allCheckBox == true) {
    document.getElementById('playGame').checked = true;
    document.getElementById('exercise').checked = true;
    document.getElementById('reading1').checked = true;
  } else {
    document.getElementById('playGame').checked = false;
    document.getElementById('exercise').checked = false;
    document.getElementById('reading1').checked = false;
  }
}

function savePlayer() {
  let getPlayerScore = localStorage.getItem("old-users");
  let text = document.getElementById("topScores");
  let n = JSON.parse(getPlayerScore).length;
  console.log(n);
  // for(let i = 0; i < n; i++){
    
  //   console.log(JSON.parse(getPlayerScore)[i].Fname);
  //     text += "<tr>";
  //     text += "<td>" + JSON.parse(getPlayerScore)[i].Fname + "</td>";
  //     text += "<td>" + JSON.parse(getPlayerScore)[i].Fname + "</td></tr>";
  // }
  var tbody = document.getElementById('tbody');
  for (var i = 0; i < n; i++) {
    var tr = "<tr>";
    tr +=  "<td>" + JSON.parse(getPlayerScore)[i].Fname + "</td>";
    tr +=  "<td>" + JSON.parse(getPlayerScore)[i].Mname + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Lname + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].DOB + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Gender + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Address1 + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Address2 + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Country + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].State + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].City + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].PinCode + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Username + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].EmaiId + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Password + "</td>";
    tr += "<td>" + JSON.parse(getPlayerScore)[i].Hobby + "</td></tr>";
    tbody.innerHTML += tr;
  }
}


