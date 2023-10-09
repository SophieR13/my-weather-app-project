let now = new Date();

let h5 = document.querySelector("h5");

let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[day];
  let currentHour = hour;
  let currentMinute = minute;

  h5.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;
}

formatDate(now);

//Second challenge

const form = document.querySelector("#search-text-input");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const input = form.querySelector("input[type='text']");
  const value = input.value;

  const cardTextCity = document.querySelector(".card-text-city");
  cardTextCity.textContent = value;

  let units = "metric";
  let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
});

//search engine

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `${temperature}° in`;
  let h5 = document.querySelector("h5");
  h5.innerHTML = message;
}
