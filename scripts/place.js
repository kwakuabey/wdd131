const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;


const lastModified = document.lastModified;

document.querySelector("#last-modified").textContent = lastModified;



function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}


const temperature = Number(document.querySelector("#temperature").textContent);

const windSpeed = Number(document.querySelector("#wind-speed").textContent);


if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#wind-chill").textContent = `${windChill} °C`;

} else {

    document.querySelector("#wind-chill").textContent = "N/A";

}