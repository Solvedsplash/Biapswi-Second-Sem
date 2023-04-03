async function updateClock() {
    const clockElement = document.getElementById("clock");
    const toggleFormatButton = document.getElementById("toggle-format");
    let is24HourFormat = false;

    function getTime() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        let amPm = "";

        if (!is24HourFormat) {
            amPm = hours >= 12 ? " PM" : " AM";
            hours = hours % 12;
            hours = hours === 0 ? 12 : hours;
        }

        hours = String(hours).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}${amPm}`;
    }

    function setClock() {
        clockElement.innerText = getTime();
    }

    function toggleFormat() {
        is24HourFormat = !is24HourFormat;
        setClock();
    }

    toggleFormatButton.addEventListener("click", toggleFormat);

    setClock();
    setInterval(setClock, 1000);
}

updateClock();




