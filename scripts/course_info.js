var x;
function switchInfo(choice) {
    x = choice;
     if (x == "networking") {
        document.getElementById("infoToSwitch").innerHTML = "The networking course is a two year course split between 6 semesters.";
    } else if (x == "software") {
        document.getElementById("infoToSwitch").innerHTML = "The software course is a single year course split between 4 semesters.";
    } else if (x == "hardware") {
        document.getElementById("infoToSwitch").innerHTML = "The hardware course is a two year course split between 8 semesters.";
    }
}
