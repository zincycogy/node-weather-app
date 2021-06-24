const request = require("request");
const dotenv = require("dotenv").config()

const API_KEY = process.env.API_KEY
const address = process.argv[2]
const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${API_KEY}`

if(!address){
  return console.log("Please enter the name of the city")
}


request(api_url, (error, response, body)=>{
const data = JSON.parse(body)
console.log(`it's currently ${data.main.temp}°C in ${data.name}`)

})
