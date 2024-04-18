function gohome() {
    window.location.reload();
}

// 위도lat, 경도lon 받아오기
navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(position)
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=609f1c04709ed695f0e8dd243042f819` //&lang=kr
    fetch(url).then(res => res.json()).then(data => {
        let area = data["name"];
        let temp = data.main["temp"]
        let weather = data.weather[0]["main"]

        if (weather == "Thunderstorm") {
            $("#todayweather").text(" " + "동물원은 다음에" + " " + temp);
            $("#image").attr("src", "thunderstorm.png");
        } else if (weather == "Drizzle") {
            $("#todayweather").text(" " + "동물원은 다음에" + " " + temp);
            $("#image").attr("src", "drizzle.png");
        } else if (weather == "Rain") {
            $("#todayweather").text(" " + "동물원은 다음에" + " " + temp);
            $("#image").attr("src", "rain.png");
        } else if (weather == "Snow") {
            $("#todayweather").text(" " + "동물원에 눈이내려요" + " " + temp);
            $("#image").attr("src", "snow.png");
        } else if (weather == "Clear") {
            $("#todayweather").text(" " + "동물원가기 좋은날" + " " + temp);
            $("#image").attr("src", "clear.png");
        } else if (weather == "Clouds") {
            $("#todayweather").text(" " + "동물원가기 좋은날" + " " + temp);
            $("#image").attr("src", "clouds.png");
        } else {
            //Atmosphere 안개 먼지 등등
            $("#todayweather").text(" " + "동물원은 다음에" + " " + temp);
            $("#image").attr("src", "atmosphere.png");
        }
        //console.log(data);
    })
});
