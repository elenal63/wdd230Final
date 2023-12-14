let currentday = new Date();
let dayofweek = currentday.getDay();
const LAT = "33.15806996089284";
const LON = "-117.35063556675718";
const APIKEY = "6011eec5ae7d2b0bd4b852c97ab29ab6";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;

// let x = document.getElementById("close-greet");

// x.addEventListener('click',()=>
// {
//     let meetgreet = document.getElementById("meetgreet");
//     meetgreet.style.display = "none";
// }
// );

function displayWeather(weatherData) {
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    const desc = weatherData.weather[0].description;
    const temperature = weatherData.main.temp.toFixed(0);
  
    //Set up the weather icon
    let weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  
    //Set up the weather description
    let weatherDesc = document.getElementById("weather-desc");
    weatherDesc.innerHTML = `${desc}`;
    
    let weatherTemp = document.getElementById("weather-temp");
    weatherTemp.innerHTML = `${temperature}&deg;F`;
  }
  
  async function getTheWeather() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
if (dayofweek == (currentday + 1) || dayofweek == (currentday + 2) || dayofweek == (currentday + 3)){
    let meetgreet = document.getElementById("meetgreet");
    meetgreet.style.display = "block";
    getTheWeather();
}
  