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
    weatherGrid.className = "WeatherGrid";

    const location = document.createElement('h2');
    const time = document.createElement('p');
    const weather = document.createElement('p');
    const condition = document.createElement('p');

    const conditionIcon = document.createElement('img');
    conditionIcon.src = data.current.condition.icon;
    conditionIcon.style.width = "50px";
    conditionIcon.style.height = "50px"

    location.innerText = data.location.name+ ", " + data.location.country;
    time.innerText = data.location.localtime;
    weather.innerText = data.current.temp_f+ " \u00B0F"+" / "+data.current.temp_c+" \u00B0C";
    condition.innerText = data.current.condition.text;

    weatherCard.appendChild(location);
    weatherCard.appendChild(time);
    weatherCard.appendChild(weather);
    weatherCard.appendChild(conditionIcon);
    weatherCard.appendChild(condition);
}