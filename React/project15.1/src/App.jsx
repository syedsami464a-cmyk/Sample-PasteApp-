import {useState , useRef} from 'react';
import './App.css'

function App() {
  const [time,setTime] = useState(0);
  const timeRef = useRef(null);

  function StartTime(){
    timeRef.current = setInterval(() => {
      setTime(time => time + 1)
    },1000);
  }

  function StopTime(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function ResetTime(){
    StopTime();
    setTime(0);
  }

  return (
    
   <div>

     {/* Timer */}
    <h1> StopWatch : {time}</h1> 

    {/* Start button */}
    <button onClick={StartTime}>
      Start
    </button>
    <br /><br />
    {/* Stop button */}
    <button onClick={StopTime}>
      Stop
    </button>
    <br /><br />
    {/* Reset button */}
    <button onClick={ResetTime}>
      Reset
    </button>

   </div>

  )
}

export default App
