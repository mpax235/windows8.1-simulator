function updateDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes + ' ' + ampm;

    var dateString = timeString;

    var datetimeElement = document.getElementById('time');
    datetimeElement.innerHTML = dateString;
}

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);