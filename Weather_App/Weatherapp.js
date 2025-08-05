let inputcity=document.getElementById("inputcity");
let btn=document.getElementById("btn");
let detailscon=document.getElementsByClassName("detailscon")[0];
const api_key="bb38bd0b8acd609a4a0b9a26a04ddd6f";
async function getWeather(){
    const city=inputcity.value.trim();
    if(city.length==0){
        alert("please enter a city name");
        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

        const response = await fetch(url);
        if(!response.ok){
            alert("City not found, please enter a valid city name");
            return;
        }
    const data = await response.json();

    detailscon.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
    <p>Temperature : ${data.main.temp}</P>
    <p>Feels Like : ${data.main.feels_like}</P>
    <p>Weather : ${data.weather[0].description}</P>
    <p>Wind Speed : ${data.wind.speed}</P>
    <p>Humidity : ${data.main.humidity}</P>`;
}
btn.addEventListener("click",getWeather);