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
let numberOfitem;
function savePlayer() {
  document.getElementById("tbody").innerHTML = "";
  document.getElementById("pages").innerHTML = "";

  let getPlayerScore = localStorage.getItem("old-users");
  let text = document.getElementById("topScores");
  let n = JSON.parse(getPlayerScore).length;
  var tbody = document.getElementById('tbody');
  var pages = document.getElementById('pages');

  let pagesNumberOfData = document.getElementById('pagesNumberOfData');

  var pageNumber = '<li class="page-item"><a class="page-link" id="pre" href="#">Previous</a></li>';
  for (var i = 0; i < n / pagesNumberOfData.value; i++) {
    if (i == 0) {

      pageNumber += '<li class="page-item active"><a class="page-link " id="pageNo' + (i + 1) + '" >' + (i + 1) + '</a></li>';
    } else {

      pageNumber += '<li class="page-item"><a class="page-link" id="pageNo' + (i + 1) + '" >' + (i + 1) + '</a></li>';
    }
  }
  pageNumber += '<li class="page-item"><a class="page-link" id="next" href="#">Next</a></li>';
  pages.innerHTML += pageNumber;
  var curr = 'pageNo1';
  $(document).ready(function () {
    $("a").click(function () {
      if (this.id == "pre") {
        var str = $("#" + curr).text();
        if (str != 1) {
          $("." + curr).hide();
          $("." + 'pageNo' + (str - 1)).show();
          curr = 'pageNo' + (str - 1);
        }

      } else if (this.id == "next") {
        var str = $("#" + curr).text();
        if (str != parseInt(n / pagesNumberOfData.value) + 1) {
          $("." + curr).hide();
          $("." + 'pageNo' + (1 + Number(str))).show();
          curr = 'pageNo' + (1 + Number(str));
          $('li').click(function () {
            $('li.page-item.active').removeClass("active");
            $(this).addClass("active");
            $("#" + curr).parent().addClass("active");

          });

        }
      }
      else {
        $("." + curr).hide();
        $("." + this.id).show();
        curr = this.id;
        $('li').click(function () {
          $('li.page-item.active').removeClass("active");
          $(this).addClass("active");

        });
      }
    });
  });


  var i = 0;

  for (var j = 0; j < n / pagesNumberOfData.value; j++) {
    for (var k = 0; k < pagesNumberOfData.value; k++) {
      var tr = "<tr class='pageNo" + (j + 1) + "'";
      var data = JSON.parse(localStorage.getItem("old-users"));
      if (i < n) {
        if (j == 0) {
          tr += "<tr class='pageNo" + (j + 1) + "'>";
        } else {
          tr += "<tr class='pageNo" + (j + 1) + "'style='display: none;'>";
        }
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + data[i].Fname + "</td>";
        tr += "<td>" + data[i].Mname + "</td>";
        tr += "<td>" + data[i].Lname + "</td>";
        tr += "<td>" + data[i].DOB + "</td>";
        tr += "<td>" + data[i].Gender + "</td>";
        tr += "<td>" + data[i].Address1 + "</td>";
        tr += "<td>" + data[i].Country + "</td>";
        tr += "<td>" + data[i].State + "</td>";
        tr += "<td>" + data[i].City + "</td>";
        tr += "<td>" + data[i].PinCode + "</td>";
        tr += "<td>" + data[i].Username + "</td>";
        tr += "<td>" + data[i].EmaiId + "</td>";
        tr += "<td> <input type='password' class='password '  id='password" + (i + 1) + "' name='password' disabled> <i class='bi bi-eye-slash' onclick='passwordIcon1(this," + (i + 1) + ")' class='togglePassword'" + (i + 1) + "></i></td>";
        tr += "<td>" + data[i].Hobby + "</td>";
        tr += "<td> <i class='fa fa-trash-o' onclick='myFunctionDelete(" + (i) + ")' style='font-size:20px;color:red'></i><i class='fa fa-edit update1' onclick='myFunctionUpdate(" + (i) + ")' data-bs-target='#myModal' data-bs-toggle='modal' style='font-size:20px;margin:5px;color:blue'></i> </td></tr>";
        tbody.innerHTML += tr;
        i++;
      }
    }

  }
  for (var k = 0; k < n; k++) {
    document.getElementById('password' + (k + 1)).value = data[k].Password;
  }
}
function passwordIcon1(e, n) {
  // const togglePassword1 = document.querySelector("#togglePassword"+e);
  const x = document.getElementById('password' + n);
  if (x.type === "password") {
    x.type = "text";
    e.classList.toggle("bi-eye");
  } else {
    x.type = "password";
    e.classList.toggle("bi-eye");
  }
}

function myFunctionDelete(e) {
  if (confirm("Press a button!") == true) {
    let getPlayerScore = localStorage.getItem("old-users");
    let a1 = JSON.parse(getPlayerScore);
    a1.splice(e, 1);
    localStorage.setItem("old-users", JSON.stringify(a1));
    document.location.reload(true);
  } else {
    return;
  }

}
function myFunctionUpdate(e) {

  let Fname = document.getElementById('fname');
  let Mname = document.getElementById('mname');
  let Lname = document.getElementById('lname');
  let Bdate = document.getElementById('dob');
  let Male = document.getElementById('male').checked;
  let Female = document.getElementById('female').checked;
  let AddressOne = document.getElementById('addressOne');
  let Country = document.getElementById('country');
  let State = document.getElementById('state');
  let City = document.getElementById('city');
  let Pincode = document.getElementById('pinCode');
  let Username = document.getElementById('userName');
  let Emailid = document.getElementById('emaiId');
  let Password = document.getElementById('password');
  let conPassword = document.getElementById('confPass');
  let getPlayerScore = JSON.parse(localStorage.getItem("old-users"));

  Fname.value = getPlayerScore[e].Fname;
  Mname.value = getPlayerScore[e].Mname;
  Lname.value = getPlayerScore[e].Lname;
  Bdate.value = getPlayerScore[e].DOB;
  gen = getPlayerScore[e].Gender;
  if (gen == 'Male') {
    document.getElementById('male').checked = true;
  } else {
    document.getElementById('female').checked = true;
  }
  AddressOne.value = getPlayerScore[e].Address1;
  Country.value = getPlayerScore[e].Country;
  State.value = getPlayerScore[e].State;
  City.value = getPlayerScore[e].City;
  Pincode.value = getPlayerScore[e].PinCode;
  Username.value = getPlayerScore[e].Username;
  Emailid.value = getPlayerScore[e].EmaiId;
  Password.value = getPlayerScore[e].Password;
  conPassword.value = getPlayerScore[e].Password;
  //  .value = getPlayerScore[e].Hobby 
  var a = document.getElementById('playGame');
  var b = document.getElementById('exercise');
  var c = document.getElementById('reading1');

  if (getPlayerScore[e].Hobby[0] == "Play Game") {
    document.getElementById('playGame').checked = true;
  }
  if (getPlayerScore[e].Hobby[1] == "Exercise") {
    document.getElementById('exercise').checked = true;
  }
  if (getPlayerScore[e].Hobby[2] == "Reading") {
    document.getElementById('reading1').checked = true;
  }
  numberOfitem = e;
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
  if (!Fname.value || Password.value != conPassword.value || !conPassword.value || Password.value.length < 8 || !Password.value || !Emailid.value || !Username.value || (!Pincode.value || Pincode.value.length != 6) || !City.value || !State.value || !Country.value || !AddressOne.value || (Male == false && Female == false) || !Bdate.value || !Lname.value || !Mname.value) {
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
    return true;
  }
}
function newval() {
  let getPlayerScore = localStorage.getItem("old-users");
  let n = JSON.parse(getPlayerScore).length;
  let a1 = JSON.parse(getPlayerScore);
  z1 = JSON.parse(getPlayerScore)[n - 1];
  a1.splice(numberOfitem, 1, z1);
  n = JSON.parse(getPlayerScore).length;
  a1.pop();
  localStorage.setItem("old-users", JSON.stringify(a1));
  savePlayer();
  document.getElementById("event").setAttribute("data-bs-dismiss", "modal");
}
$(document).ready(function () {
  let a1;
  $("#event").click(function () {
    a1 = myFunction();
  });
  $(".update1").click(function () {
    $("#event").click(function () {
      if (a1 == false) {
        return a1;
      }
      else {
        newval();
      }
    });
  });
  });
$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});