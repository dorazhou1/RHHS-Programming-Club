var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }); 
}


/*NUMBERS*/
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
function animateValueDecimal(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor((progress * (end - start) + start)*100)/100;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
var animated = false;
window.addEventListener("scroll", function() {
    //Scroll into view
    
    //Numbers Animation
    var elementTarget = document.getElementById("numbers");
    if (window.scrollY > elementTarget.offsetTop - screen.height + 100 && !animated) {
        const obj = document.getElementById("value");
        const obj2 = document.getElementById("value2");
        const obj3 = document.getElementById("value3");
        animateValue(obj, 700, 800, 2000.0);
        animateValue(obj2, 3, 15, 2000);
        animateValue(obj3, 1, 9, 2000);
        animated = true;
    }
});

/*COLLAPSIBLE*/
