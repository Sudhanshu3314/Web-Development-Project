function Clr() {
    document.getElementById("dob").value = "";
}
function Cal() {
    var dob = document.getElementById("dob").value,
        day = new Date(dob),
        bdaytime = day.getTime(),
        today = new Date(),
        timenow = today.getTime(),
        value = timenow - bdaytime,
        sec = Math.floor(value / 1000),
        min = Math.floor(value / (1000 * 60)),
        hour = Math.floor(value / (1000 * 60 * 60)),
        days = Math.floor(value / (1000 * 60 * 60 * 24)),
        week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
        month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
        year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("years").innerHTML = year + " years.";
    document.getElementById("months").innerHTML = month + " months.";
    document.getElementById("weeks").innerHTML = week + " weeks.";
    document.getElementById("days").innerHTML = days + " days.";
    document.getElementById("hours").innerHTML = hour + " hours.";
    document.getElementById("minutes").innerHTML = min + " minutes.";
    document.getElementById("seconds").innerHTML = sec + " seconds.";

    setInterval(Cal, 1000);

    if (dob == "") {
        document.getElementById("years").innerHTML = "NULL";
        document.getElementById("months").innerHTML = "NULL";
        document.getElementById("weeks").innerHTML = "NULL";
        document.getElementById("days").innerHTML = "NULL";
        document.getElementById("hours").innerHTML = "NULL";
        document.getElementById("minutes").innerHTML = "NULL";
        document.getElementById("seconds").innerHTML = "NULL";
    }
}