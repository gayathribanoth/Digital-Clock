 const timeDiv = document.querySelector('.time');
const dateDiv = document.querySelector('.date');
const button = document.querySelector('.btn');
let is24hrs = false;

// TIME
function updateTime() {
    const timeConv = new Date();

    if (is24hrs) {
        // 24-hour format
        const hours = timeConv.getHours().toString().padStart(2, '0');
        const minutes = timeConv.getMinutes().toString().padStart(2, '0');
        const seconds = timeConv.getSeconds().toString().padStart(2, '0');
        timeDiv.innerText = `${hours}:${minutes}:${seconds}`;
    } else {
        // 12-hour format with AM/PM
        timeDiv.innerText = timeConv.toLocaleTimeString('en-IN', { hour12: true });
    }
}
setInterval(updateTime, 1000);

// DATE
function updateDate() {
    dateDiv.innerText = new Date().toLocaleDateString('en-IN');
}
setInterval(updateDate, 1000);

// BUTTON
button.addEventListener('click', function () {
    is24hrs = !is24hrs;
    is24hrs
        ? button.innerText = "Switch to 12-hours Format"
        : button.innerText = "Switch to 24-hours Format";
    updateTime();
});
