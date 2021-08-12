/* SLIDE ANIMATION */
//slide in & fade in
var id = null;
function slideIn(ID) {
    var elem = document.getElementById(ID);
    var pos = 75;
    var opacity = 0;
    elem.style.position = "relative";
    clearInterval(id);
    id = setInterval(frame, 15);
    
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            opacity = 0;
        } else {
            pos--;
            opacity++;
            elem.style.visibility = "visible";
            elem.style.top = pos + 'px';
            elem.style.opacity = Math.pow(1000, opacity/75-1);
        }
    }
}

/* CONTACT FORM */
(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("user_lgRrojXfL7JqBu26ahlOY");
})();
function formLoad() {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkform()) {

      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_ab6mjnn', 'template_12lz07g', this)
        .then(function () {
          console.log('SUCCESS!');
        }, function (error) {
          console.log('FAILED...', error);
        });
      var x = document.getElementById("form");
      var y = document.getElementById("thanks");

      x.style.display = "none";
      y.style.display = "block";
    }
  });
}

function checkform() {
  if (document.getElementById("name").value == "") {
    showalert("name", "1");
    return false;
  } else {
    hidealert("name", "1");
  }
  if (document.getElementById("email").value == "") {
    showalert("email", "2");
    return false;
  } else {
    hidealert("email", "2");
  }
  if (document.getElementById("message").value == "") {
    showalert("message", "3");
    return false;
  } else {
    hidealert("message", "3");
  }

  return true;
}
function showalert(id, num) {
  if (document.getElementById(id + "_alert").style.display == "none") {
    var x = document.getElementById(id + "_alert");
    x.style.display = "block";
    var br = document.getElementById("remove" + num);
    br.style.display = "none";
    var h = document.getElementById("formcontainer").getBoundingClientRect().height;
    document.getElementById("formcontainer").style.height = h + 50 + "px";
    return false;
  }
}
function hidealert(id, num) {
  if (document.getElementById(id + "_alert").style.display == "block") {
    var x = document.getElementById(id + "_alert");
    x.style.display = "none";
    h = document.getElementById("formcontainer").getBoundingClientRect().height;
    document.getElementById("formcontainer").style.height = h - 50 + "px";
    var br = document.getElementById("remove" + num);
    br.style.display = "block";
  }

}