const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5233573c75msh12e301123004814p14159ejsn4c8f63a4618b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const formatTime = (timestamp) => {
	const date = new Date(timestamp * 1000);
	const hours = date.getHours();
	const minutes = '0' + date.getMinutes();
	const formattedTime = hours % 12 + ':' + minutes.substr(-2) + ' ' + (hours >= 12 ? 'PM' : 'AM');
	return formattedTime;
  };


const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = formatTime(response.sunrise)
			sunset.innerHTML = formatTime(response.sunset)
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_NY.innerHTML = response.cloud_pct
		temp_NY.innerHTML = response.temp
		feels_like_NY.innerHTML = response.feels_like
		humidity_NY.innerHTML = response.humidity
		min_temp_NY.innerHTML = response.min_temp
		max_temp_NY.innerHTML = response.max_temp
		wind_speed_NY.innerHTML = response.wind_speed
		wind_degrees_NY.innerHTML = response.wind_degrees
		sunrise_NY.innerHTML = formatTime(response.sunrise)
		sunset_NY.innerHTML = formatTime(response.sunset)
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_Lucknow.innerHTML = response.cloud_pct
		temp_Lucknow.innerHTML = response.temp
		feels_like_Lucknow.innerHTML = response.feels_like
		humidity_Lucknow.innerHTML = response.humidity
		min_temp_Lucknow.innerHTML = response.min_temp
		max_temp_Lucknow.innerHTML = response.max_temp
		wind_speed_Lucknow.innerHTML = response.wind_speed
		wind_degrees_Lucknow.innerHTML = response.wind_degrees
		sunrise_Lucknow.innerHTML = formatTime(response.sunrise)
		sunset_Lucknow.innerHTML = formatTime(response.sunset)
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nainital', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_Nainital.innerHTML = response.cloud_pct
		temp_Nainital.innerHTML = response.temp
		feels_like_Nainital.innerHTML = response.feels_like
		humidity_Nainital.innerHTML = response.humidity
		min_temp_Nainital.innerHTML = response.min_temp
		max_temp_Nainital.innerHTML = response.max_temp
		wind_speed_Nainital.innerHTML = response.wind_speed
		wind_degrees_Nainital.innerHTML = response.wind_degrees
		sunrise_Nainital.innerHTML = formatTime(response.sunrise)
		sunset_Nainital.innerHTML = formatTime(response.sunset)
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_Bhopal.innerHTML = response.cloud_pct
		temp_Bhopal.innerHTML = response.temp
		feels_like_Bhopal.innerHTML = response.feels_like
		humidity_Bhopal.innerHTML = response.humidity
		min_temp_Bhopal.innerHTML = response.min_temp
		max_temp_Bhopal.innerHTML = response.max_temp
		wind_speed_Bhopal.innerHTML = response.wind_speed
		wind_degrees_Bhopal.innerHTML = response.wind_degrees
		sunrise_Bhopal.innerHTML = formatTime(response.sunrise)
		sunset_Bhopal.innerHTML = formatTime(response.sunset)
	})
	.catch(err => console.error(err));


