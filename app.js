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

    const dateGrid = document.createElement('div');
    dateGrid.className = "dateGrid";

    const header = document.createElement('h2');
    header.innerText = "Right Now In Paris It Is:"

    const time = document.createElement('h4');
    const date = document.createElement('h4');
    const weather = document.createElement('h3');
    const condition = document.createElement('h3');

    const conditionIcon = document.createElement('img');
    conditionIcon.src = data.current.condition.icon;
    conditionIcon.style.width = "100px";
    conditionIcon.style.height = "100px"

    let objectTime = data.location.localtime;

    time.innerText = objectTime.slice(6,10)+"-2023";
    date.innerText = objectTime.slice(-4);
    weather.innerText = data.current.temp_f+ " \u00B0F"+" / "+data.current.temp_c+" \u00B0C";
    condition.innerText = data.current.condition.text;

    weatherCard.appendChild(header);
    weatherCard.appendChild(dateGrid);
    dateGrid.appendChild(time);
    dateGrid.appendChild(date);
    weatherCard.appendChild(weather);
    weatherCard.appendChild(conditionIcon);
    weatherCard.appendChild(condition);

}