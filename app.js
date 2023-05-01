async function displayWeather(){
    try{
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=f2b1547cc854421da5e111905231504&q=Paris&days=1&aqi=no&alerts=no");
        const data = await response.json();
        
        createCard(data);
    }catch{
        console.error(error);
    }
}

function createCard(data){
    const weatherCard = document.querySelector('.WeatherCard');

    const weatherGrid = document.createElement('div');
    weatherGrid.className = "weatherGrid";

    const weatherCircle = document.createElement('div');
    weatherCircle.className = "weatherCircle";

    const weatherCircle2 = document.createElement('div');
    weatherCircle.className = "weatherCircle2";


    const header = document.createElement('h2');
    header.innerText = "Right Now In Paris:"
    header.className = "separator";

    const time = document.createElement('h4');
    const date = document.createElement('p');
    const weather = document.createElement('h3');
    const condition = document.createElement('h3');

    const feelsLike = document.createElement('p');
    const humidity = document.createElement('p');
    const winds = document.createElement('p');

    const conditionIcon = document.createElement('img');
    conditionIcon.src = data.current.condition.icon;
    conditionIcon.style.width = "100px";
    conditionIcon.style.height = "100px"

    let objectTime = data.location.localtime;

    const Date = objectTime.slice(6,10)+"-2023";
    let Time = objectTime.slice(-5);

    date.innerText = "Currently, it is "+Time+" on "+Date;

    weather.innerText = data.current.temp_f+ " \u00B0F"+" / "+data.current.temp_c+" \u00B0C";
    condition.innerText = data.current.condition.text;

    feelsLike.innerText = "Feels Like: "+data.current.feelslike_f+ " \u00B0F" +" / "+data.current.feelslike_c+ " \u00B0C";

    humidity.innerText = "Humidity: " + data.current.humidity+"%";
    winds.innerText = "Wind: " + data.current.wind_mph+" mph";

    const line = document.createElement('br');
    weatherCard.appendChild(header);
    weatherCard.appendChild(weatherGrid);
    weatherGrid.appendChild(weatherCircle)
    weatherCircle.appendChild(weather);
    weatherCircle.appendChild(conditionIcon);
    weatherCircle.appendChild(condition);

    weatherGrid.appendChild(weatherCircle2);
    weatherCircle2.appendChild(feelsLike);
    weatherCircle2.appendChild(humidity);
    weatherCircle2.appendChild(winds);

    weatherCard.appendChild(date);
}