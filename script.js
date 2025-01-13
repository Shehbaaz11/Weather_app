const apiKey = "b561244df50b7eb4f0bdb7f68f8f4008";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function apicall(searchcity){
    let response= await fetch(apiUrl + searchcity +`&appid=${apiKey}`);
   if(response.status == 404){
    document.querySelector('.error').style.display="block"
    document.querySelector('.weather').style.display="none"
   }    
   
    let data= await response.json();

    console.log(data)


let city=document.querySelector('.city');
let temperature=document.querySelector('.temp');
let humidity =document.querySelector('.humidity');
let wind=document.querySelector('.wind');

let weatherIcon=document.querySelector('.weather-icon')


city.textContent=data.name;
temperature.textContent=Math.floor(data.main.temp) + "°c";
humidity.textContent=data.main.humidity + "%";
wind.textContent=data.wind.speed + "km/h";


if(data.weather[0].main =='Clouds'){
       weatherIcon.src="images/clouds.png";
}
else if (data.weather[0].main =='Clear'){
    weatherIcon.src="images/clear.png";
}
else if (data.weather[0].main =='Rain'){
    weatherIcon.src="images/rain.png";
}
else if (data.weather[0].main =='Drizzle'){
    weatherIcon.src="images/drizzle.png";
}
else if (data.weather[0].main =='Mist'){
    weatherIcon.src="images/mist.png";
}
else if (data.weather[0].main =='Haze'){
    weatherIcon.src="images/snow.png";
}



document.querySelector('.weather').style.display="block"


}

searchBtn.addEventListener("click",()=>{
     apicall(searchBox.value);
})