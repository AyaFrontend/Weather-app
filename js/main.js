(function(){

let inputSearch = document.getElementById('search');
let btnSearch = document.getElementById('btnSearch');
let data ='';
let weatherData = '';

async function getWeatherApi(loc = 'cairo')
{
  data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5abfc6aed1c34431b96184133221601&q=${loc}&days=3`)
  weatherData = await data.json();
 
 displayWeather();
}

getWeatherApi();

  
function displayWeather()
{ 
    let row = document.getElementById('row');
    row.innerHTML = '';
   for(let i =0; i < weatherData.forecast.forecastday.length; i++)
   {
  
      row.innerHTML +=` <div class=" col-4  ">
      <div class=" d-flex justify-content-between w-100 bg-blued">
          
          <p class="text-white ps-2">${ weatherData.forecast.forecastday[i].date}</p>
      </div>
      <div class="bg-lightblued p-4">
          <p class="text-white ps-1">${weatherData.location.name}</p>
          <h5 class="text-white ps-1">Max Temp: ${ weatherData.forecast.forecastday[i].day.maxtemp_c}</h5>
          <h5 class="text-white ps-1">Min Temp: ${ weatherData.forecast.forecastday[i].day.mintemp_c}</h5>
          <img src="https:${weatherData.forecast.forecastday[i].day.condition.icon}">
          <p class="text-white ps-1 py-md-3">${weatherData.forecast.forecastday[i].day.condition.text}</p>
       
      </div>
   </div>`;
   }
  
}

btnSearch.addEventListener('click',function()
{
  getWeatherApi(inputSearch.value);
})
  
})();

