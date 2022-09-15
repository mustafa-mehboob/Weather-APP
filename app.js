let cityName = document.getElementById("cityName");

if (!cityName.value) {
    cityName.value = "karachi"
    const getData = new Promise((resolve, reject) => {
        fetch(
            // "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
            " https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=b901d8fc5b306a7ed27cc85df5b9f8d4&units=metric"
        )
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });

    getData.then((res) => {
        console.log(res);
        if (!fetch) {
            swal("Enter correct city");
        } else {
            console.log(Math.round(res.main.temp));
            
            document.getElementById("description").innerHTML = res.weather[0].description
            document.getElementById("temp").innerHTML = Math.round(res.main.temp) + "&#176;"
        }
    });
}
function cityValue() {
    let temp = document.getElementById("temp");
    console.log(cityName.value);

    const getData = new Promise((resolve, reject) => {
        fetch(
            // "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
            " https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=b901d8fc5b306a7ed27cc85df5b9f8d4&units=metric"
        )
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });

    getData.then((res) => {
        console.log(res);
        if (!fetch) {
            swal("Enter correct city");
        } else {
            console.log(Math.round(res.main.temp));
            
            document.getElementById("description").innerHTML = res.weather[0].description
            document.getElementById("temp").innerHTML = Math.round(res.main.temp) + "&#176;"
        }
    });
}
