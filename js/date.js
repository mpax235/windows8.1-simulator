function updateDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // Months are zero-based
    var day = now.getDate();
    var dateString = month + '/' + day + '/' + year;

    var dateTimeString = dateString;

    var datetimeElement = document.getElementById('date');
    datetimeElement.innerHTML = dateString;
}

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);