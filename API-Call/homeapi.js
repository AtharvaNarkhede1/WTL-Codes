const API_KEY = "22017445878a667db41f71da00f0d306"; // put your OpenWeather API key here
    const CITY = "Kopargaon";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    async function fetchWeather() {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();

        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("pressure").textContent = data.main.pressure;
        document.getElementById("weather").textContent = data.weather[0].description;
        document.getElementById("wind_speed").textContent = data.wind.speed;
        document.getElementById("precipitation").textContent = data.rain ? data.rain["1h"] : 0;
        document.getElementById("timestamp").textContent = new Date().toLocaleString();

      } catch (err) {
        console.error("Error:", err);
      }
    }

    // Call immediately and refresh every 10 minutes
    fetchWeather();
    setInterval(fetchWeather, 600000);