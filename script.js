let getApi = async () => {
    let url = 'https://restcountries.com/v3.1/all';
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  
  async function getsingapore() {
    getApi()
      .then((data) => {

        // Filter the Singapore

        let singapore = data.find((country) => country.name.common === 'Singapore');
        console.log(singapore)
        //get the country name to print
        let singaporename = document.getElementById('singapore-name');
        singaporename.innerText = `Country-Name:${singapore.name.common}`;
        document.body.appendChild(singaporename);

        //print the flag
        let singaporeFlag = document.getElementById('singapore-flag');
         singaporeFlag.src = singapore.flags.png;
        document.body.appendChild(singaporeFlag)
  
        //print the capital
        let singaporecapital=document.getElementById("singapore-capital");
        singaporecapital.innerText=`Capital: ${singapore.capital}`;
        document.body.appendChild(singaporecapital);

        //print the region
        let singaporeregion=document.getElementById("singapore-region");
        singaporeregion.innerText=`Region: ${singapore.region}`;
        document.body.appendChild(singaporeregion);

        //print the lat/long
        let singaporelatlong=document.getElementById("singapore-latlong");
        singaporelatlong.innerText=`Lat/Lng: ${singapore.capitalInfo.latlng}`;
        document.body.appendChild(singaporelatlong);        
        //print the country code
        let singaporecountrycode=document.getElementById("singapore-countrycode");
        singaporecountrycode.innerText=`Country-Code: ${singapore.altSpellings[0]}`;
        document.body.appendChild(singaporecountrycode);
        
        //Filter the weather
        let singaporeweather = document.getElementById("singapore-weather");
        singaporeweather.innerHTML = '<a href="https://openweathermap.org/city/1880252" target=_blank>Click for Weather</a>';
        document.body.appendChild(singaporeweather);        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  getsingapore();
  


  async function getcuba() {
    getApi()
      .then((data) => {

        // Filter the Singapore

        let cuba = data.find((country) => country.name.common === 'Cuba');
        console.log(cuba)
        //get the country name to print
        let cubaname = document.getElementById('cuba-name');
        cubaname.innerText = `Country-Name:${cuba.name.common}`;
        document.body.appendChild(cubaname);

        //print the flag
        let cubaFlag = document.getElementById('cuba-flag');
        cubaFlag.src = cuba.flags.png;
        document.body.appendChild(cubaFlag)
  
        //print the capital
        let cubacapital=document.getElementById("cuba-capital");
        cubacapital.innerText=`Capital: ${cuba.capital}`;
        document.body.appendChild(cubacapital);

        //print the region
        let cubaregion=document.getElementById("cuba-region");
        cubaregion.innerText=`Region: ${cuba.region}`;
        document.body.appendChild(cubaregion);

        //print the lat/long
        let cubalatlong=document.getElementById("cuba-latlong");
        cubalatlong.innerText=`Lat,Lng: ${cuba.capitalInfo.latlng}`;
        document.body.appendChild(cubalatlong);        
        //print the country code
        let cubacountrycode=document.getElementById("cuba-countrycode");
        cubacountrycode.innerText=`Country-Code: ${cuba.altSpellings[0]}`;
        document.body.appendChild(cubacountrycode);
        
        //Filter the weather
        let cubaweather = document.getElementById("cuba-weather");
        cubaweather.innerHTML = '<a href="https://openweathermap.org/city/4383070" target=_blank>Click for Weather</a>';
        document.body.appendChild(cubaweather);        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  getIndia();

  async function getIndia() {
    getApi()
      .then((data) => {

        // Filter the Singapore

        let India = data.find((country) => country.name.common === 'India');
        console.log(India)
        //get the country name to print
        let indianame = document.getElementById('india-name');
        indianame.innerText = `Country-Name:${India.name.common}`;
        document.body.appendChild(indianame);

        //print the flag
        let indiaFlag = document.getElementById('india-flag');
         indiaFlag.src = India.flags.png;
        document.body.appendChild(indiaFlag)
  
        //print the capital
        let indiacapital=document.getElementById("india-capital");
        indiacapital.innerText=`Capital: ${India.capital}`;
        document.body.appendChild(indiacapital);

        //print the region
        let indiaregion=document.getElementById("india-region");
        indiaregion.innerText=`Region: ${India.region}`;
        document.body.appendChild(indiaregion);

        //print the lat/long
        let indialatlong=document.getElementById("india-latlong");
        indialatlong.innerText=`Lat/Lng: ${India.capitalInfo.latlng}`;
        document.body.appendChild(indialatlong);        
        //print the country code
        let indiacountrycode=document.getElementById("india-countrycode");
        indiacountrycode.innerText=`Country-Code: ${India.altSpellings[0]}`;
        document.body.appendChild(indiacountrycode);
        
        //Filter the weather
        let indiaweather = document.getElementById("india-weather");
        indiaweather.innerHTML = '<a href="https://openweathermap.org/city/1269750" target=_blank>Click for Weather</a>';
        document.body.appendChild(indiaweather);        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  getcuba();






// let getWeather= async (city)=>{
//     let weatherApi='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5a8b9a57a8f283a5cbdf3926b927d03d&units=metric'
//     let weatherobj=await fetch(weatherApi);
//     let response= await weatherobj.json();
//       return response;
// }
//  async function callweather(){
//     getWeather('India')
//     .then((response)=>{
//        console.log(response);
//        console.log(response.sys.country);
//        console.log(response);
//        var singaporeweather = document.getElementById("singapore-weather");
//        singaporeweather.innerHTML = `The temperature in ${response.name}, ${response.sys.country} is ${response.main.temp} Celcius`;
//      document.body.appendChild(singaporeweather)

//     })
//  }
//  callweather();




