import axios from 'axios'
import readlineSync from 'readline-sync'

let apikey = '9c181c2a80727e796b2ff16af6d85fab'
let cityname = readlineSync.question('enter city to search : ')

/*
1. Display City Name at Top
2. Display Current Temperature in Celsius and Farhenheit
3. Display Min and Max Temperature in Celsius and Farhenheit
4. Display Sunset and Sunrise Time in IST (Depending on their Local Time Zone)
5. Display Humidity
*/

function getWheatherData(){

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
    .then((res) =>{
        let city = res.data.name
        let temp = res.data.main.temp
        let time = res.data.timezone
        let dtTime = res.data.dt
        let sunRise = res.data.sys.sunrise
        let sunSet = res.data.sys.sunset


        let minTemp = res.data.main.temp_min
        let maxTemp = res.data.main.temp_max
        let minFarhenheit = kelvinToFarenhit(minTemp)
        let maxFarhenheit = kelvinToFarenhit(maxTemp)
        let minCelsius = kelvinToCelcius(minTemp)
        let maxCelsius = kelvinToCelcius(maxTemp)
        let Celsius = kelvinToCelcius(temp)
        let Farhenheit = kelvinToFarenhit(temp)

         console.log(localTime(dtTime,time))
        console.log("City",city)
        console.log('sunrise in UTC',utcConverter(sunRise))
        console.log('sunset in UTC',utcConverter(sunSet))

        console.log('temperature',Celsius,'C')
        console.log('temperature',Farhenheit,'F')
        console.log('minimum temperature ',minCelsius,'C')
        console.log('maximum temperature ',maxCelsius,'C')
        console.log('minimum temperature ',minFarhenheit,'F')
        console.log('minimum temperature ',maxFarhenheit,'F')


    })
    .catch((error) => {
        console.error(error.response.data.message)
        console.error(error.response.data)
    })
}
getWheatherData()
function kelvinToCelcius(temp){
    return  Math.floor(temp - 273.15)
}
function kelvinToFarenhit(temp){
    return Math.floor((temp - 273.15) * 1.8 + 32)
}

function utcConverter(time){
    return new Date(time * 1000) 
}
function localTime(dt,time){
    // var currentTime = new Date();

    // var currentOffset = currentTime.getTimezoneOffset();
    
    // var ISTOffset = time / 60;   // IST offset UTC +5:30 
    
    // var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    
    // // ISTTime now represents the time in IST coordinates
    
    // var hoursIST = ISTTime.getHours()
    // var minutesIST = ISTTime.getMinutes()
    // return [hoursIST,minutesIST]
    let d = new Date((dt + time) * 1000)
    return d
}