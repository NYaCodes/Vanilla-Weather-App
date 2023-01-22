let apiKey = "7a02a4ad0d5tebob4bd0bb4b9af39320";
let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


function displayTemperature(response) {
  console.log(response.data);
}

 axios.get(apiUrl).then(displayTemperature);`;