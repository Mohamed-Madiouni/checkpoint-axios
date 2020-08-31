const axios = require('axios');
 

axios.get("https://api.openweathermap.org/data/2.5/weather?q=Sousse&appid=49fe4f8b4b92fbb0f85799b73c82b2bb&units=metric")
  .then(function (response) {
  
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
