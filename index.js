const axios = require("axios");

const requestOne = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Sousse&appid=49fe4f8b4b92fbb0f85799b73c82b2bb&units=metric"
);

const requestTwo = axios.get(
  "https://api.openweathermap.org/data/2.5/onecall?lat=35.821430&lon=10.634422&appid=49fe4f8b4b92fbb0f85799b73c82b2bb&units=metric"
);

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((firstResponse, secondResponse) => {
      console.log("First API",firstResponse.data,"\n","Second API",secondResponse.data);
    })
  )
  .catch(function (error) {
    console.log(error);
  });
