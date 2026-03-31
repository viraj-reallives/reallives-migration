function openDiv(divId) {
    document.getElementById("licence-home").style.display = "none";
    document.querySelectorAll(".content-div").forEach(div => {
        div.style.display = "none";
    });
    document.getElementById(divId).style.display = "block";
}

function goBack() {
    document.querySelectorAll(".content-div").forEach(div => {
        div.style.display = "none";
    });
    document.getElementById("licence-home").style.display = "block";
}