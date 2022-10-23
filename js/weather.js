const API_KEY = "3fb32d16d98869d72d65760b1720e238";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:nth-child(3)");
      const tempMax = document.querySelector("#weather span:nth-child(4)");
      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}°`;
      weather.innerText = `${data.weather[0].main}`;
      tempMax.innerText = `H:${data.main.temp_max}°`;
    });
}

function onGeoFail() {
  alert("Failed to find your position.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);
