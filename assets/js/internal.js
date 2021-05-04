const mainSec = document.querySelector("#main-W");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
const inSearch = document.querySelector("#search");
let weatherTD;
let windDir;

inSearch.setAttribute("onkeyup", "searchWeather(this.value)")

function searchWeather(val) {
    (async function() {
        let toDay = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2e98d4f6b5c4849b98213404212904&q=${val}&days=3`);
        weatherTD = await toDay.json();
        windDir = weatherTD.current.wind_dir;
        displayToDay();
    })();
}

(async function() {
    let toDay = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b2e98d4f6b5c4849b98213404212904&q=cairo&days=3`);
    weatherTD = await toDay.json();
    windDir = weatherTD.current.wind_dir;
    displayToDay();
})();

function displayToDay() {
    switch (windDir) {
        case "N":
            windDir = "north";
            break;
        case "NNE":
            windDir = "north-northeast";
            break;
        case "NE":
            windDir = "northeast";
            break;
        case "ENE":
            windDir = "east-northeast";
            break;
        case "E":
            windDir = "east";
            break;
        case "ESE":
            windDir = "east-southeast";
            break;
        case "SE":
            windDir = "southeast";
            break;
        case "SSE":
            windDir = "south-southeast";
            break;
        case "S":
            windDir = "south";
            break;
        case "SSW":
            windDir = "south-southwest";
            break;
        case "SW":
            windDir = "southwest";
            break;
        case "WSW":
            windDir = "west-southwest";
            break;
        case "W":
            windDir = "west";
            break;
        case "NW":
            windDir = "north-west";
            break;
        case "NNW":
            windDir = "North-North-west";
            break;
    };
    const items = `<div class="col-md-4 p-0">
    <div class="itemDay" id="main-W">
    <div class="head-top">
    <span class="day">${days[date.getDay()]}</span>
    <span class="date">${date.getDate()} ${months[date.getMonth()]}</span>
    </div>
    <div class="body-item">
    <p class="city">${weatherTD.location.name}</p>
    <div class="temp">
        <h2>${weatherTD.current.temp_c}<sup>o</sup>C</h2>
        <img src="${weatherTD.current.condition.icon}" alt="">
        </div>
            <p class="text-primary text-cu">${weatherTD.current.condition.text}</p>
            <div class="details-temp">
                <div>
                    <img src="./assets/images/icon-umberella.png" alt="">
                    <p>${weatherTD.current.humidity}%</p>
                </div>
                <div>
                    <img src="./assets/images/icon-wind.png" alt="">
                    <p>${weatherTD.current.wind_kph}km/h</p>
                </div>
                <div>
                    <img src="./assets/images/icon-compass.png" alt="">
                    <p>${windDir}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-md-4 p-0">
    <div class="itemDay item-center">
        <div class="head-top-next">
            <span class="nex-day">${days[date.getDay()+1]}</span>
        </div>
        <div class="body-item-next">
            <img src="${weatherTD.forecast.forecastday[1].day.condition.icon}" alt="" class="imgWeather">

            <div class="temp">
            <h2>${weatherTD.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>C</h2>
            <h6>${weatherTD.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C</h6>
            </div>
            <p class="text-primary  text-cu">${weatherTD.forecast.forecastday[1].day.condition.text}</p>
        </div>
    </div>
</div>
<div class="col-md-4 p-0">
    <div class="itemDay">
        <div class="head-top-next">
            <span class="nex-day">${days[date.getDay()+2]}</span>
        </div>
        <div class="body-item-next">
            <img src="${weatherTD.forecast.forecastday[2].day.condition.icon}" alt="" class="imgWeather">
            <div class="temp">
                <h2>${weatherTD.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C</h2>
                <h6>${weatherTD.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C</h6>
            </div>
            <p class="text-primary  text-cu">${weatherTD.forecast.forecastday[2].day.condition.text}</p>
        </div>
    </div>
</div>`;
    document.querySelector(".items").innerHTML = items;
}