function get_weather(){
    const api_key = '76e3cf759129714006e429f88d0bf97c';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please, enter a city.');
        return;
    }

    const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    fetch(weather_url)
        .then(response => response.json())
        .then(data => {
            display_weather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data', error);
            alert('Error fetching current weather data. Please, try again.');
        })
}