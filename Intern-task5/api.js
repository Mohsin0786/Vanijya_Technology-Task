$(document).ready(function () {
    $('button').click(async function getTempData() {
        const name = $('#name').val();

        const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${name},in&units=metric&appid=50edf3e3653bb0502ed27bed267d962d`;

        const response = await fetch(base_url);
        const data = await response.json();
        let temperature = data.main.temp;
        let feel_temperature = data.main.feels_like;

        document.getElementById("temp").textContent = `${temperature} ℃`;
        document.getElementById("temp").style.color = "green";
        document.getElementById("description").textContent = data.weather[0].description;

        document.getElementById("description").style.color = "green";
        document.getElementById("humidity").textContent = data.main.humidity;

        document.getElementById("humidity").style.color = "green";
        document.getElementById("feels").textContent = `${feel_temperature} ℃`;

        document.getElementById("feels").style.color = "green";
        const icon = data.weather[0].icon;

        let uri_icon = "https://openweathermap.org/img/w/" + icon + ".png";
        document.getElementById("icon").src = uri_icon;
        document.getElementById("dis-card").style.display = "block";




    });
});