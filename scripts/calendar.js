/*CALENDAR*/
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        googleCalendarApiKey: 'AIzaSyA-VoJQfjnHhFQP1gln28Fb1FTFdpT1Zc8',
        events: {
          googleCalendarId: 'i5b1nnfjpf1rrulg7uii558i8k@group.calendar.google.com'
        }
    });
    
    calendar.render();
});
/*COLLAPSIBLE*/
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