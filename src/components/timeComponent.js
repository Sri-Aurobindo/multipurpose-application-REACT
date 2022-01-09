import react, {useState} from "react";
import axios from "axios";
const TimeComponent = () =>{

    const [timeState,settimeState] = useState(null)
    
    const [dateState,setdateState] = useState(null)
    async function timeValue(){
                const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Los_Angeles',{
                    mode: 'cors'
                })
                //response.data.datetime 2022-01-07T17:58:48.967645-08:00
        const splittedArray=response.data.datetime.split("T");
        const restArray = splittedArray[1].split(".")
        const timeArray = restArray[0].split(":")
        let hours = timeArray[0]%12
        let time = timeArray > 12 ? "AM" : "PM"
        let new12HrTime = `${hours}:${timeArray[1]} ${time}`
        settimeState(new12HrTime)
        setdateState(splittedArray[0])
    }
    setInterval(timeValue,60000)
    timeValue()
        
    return (
        <div>
            <h3>Time - {timeState}</h3>
            <h3>Date - {dateState}</h3>
        </div>
    )
}

export default TimeComponent;
