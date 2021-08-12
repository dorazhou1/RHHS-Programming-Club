//slide in & fade in
var id = null;
function slideIn(ID) {
    var elem = document.getElementById(ID);
    var pos = 75;
    var opacity = 0;
    elem.style.position = "relative";
    clearInterval(id);
    id = setInterval(frame, 10);
    
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


var animated,introA,eventsA = false;
window.addEventListener("scroll", function() {
    //Scroll into view
    var home = document.getElementById("top");
    var intro = document.getElementById("introslide");
    var events = document.getElementById("events");
    var screenheight = screen.height;
    if(screen.height < 600 && screen.width > 500) {
      screenheight = 600;
    }
    if(window.scrollY > intro.offsetTop - screenheight + 200 && !introA && home.style.top == 0) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        slideIn("introslide");
        console.log("intro slide");
        introA=true;
    }
    if(window.scrollY > events.offsetTop - screenheight + 200 && !eventsA && intro.style.top == 0) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        if(intro.style.top !=0) {
            intro.style.top = 0;
            intro.style.opacity = 1;
        }
        slideIn("eventsslide");
        console.log("events slide, intro:"+intro.offsetTop+" events:"+events.offsetTop+" scroll:"+window.scrollY);
        eventsA=true;
    }
});


//Word looping
setTimeout(() => {
    
  var words = document.querySelectorAll('#word');
    console.log(words);
  var wordArray = [];
  var currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function() {
      if (cw[i].innerHTML == " ") {
        cw[i].className = 'letter out space';
      } else {
        cw[i].className = 'letter out';
      }
    }, i*30);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function() {
      if (nw[i].innerHTML == " ") {
        nw[i].className = 'letter in space';
      } else {
        nw[i].className = 'letter in';
      }
    }, 340+(i*30));
  }

  function splitLetters(word) {
      console.log("reached");
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      var letterChar = content.charAt(i);
      letter.className = letterChar == " " ? 'letter space' : 'letter';
      letter.innerHTML = letterChar;
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 2750);
}, 1000);


