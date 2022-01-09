import react, {useState} from "react";
import axios from "axios";
const WeatherComponent = () =>{

    const [celcius,setCelcius] = useState(null)
    
    const [fahrenheit,setFahrenheit] = useState(null)
    async function weatherCondition(){
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=94542,us&appid=396ec18cfe2a84bea4b5ad4ce216793f',{
                    mode: 'cors'
                })
        setFahrenheit(((response.data.main.temp - 273.15) * 9/5 + 32).toPrecision(2))
        setCelcius((response.data.main.temp- 273.15).toPrecision(2))
    }
    setInterval(weatherCondition,300000)
    weatherCondition()
        
    return (
        <div>
            <h3>Temp</h3>
            <h4>F - {fahrenheit}</h4>
            <h4>C - {celcius}</h4>
        </div>
    )
}

export default WeatherComponent;
