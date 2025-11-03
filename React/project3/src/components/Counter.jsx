import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have Clicked {count} times</p>
        <div className="btn1">
          <button id='btn' onClick={()=>{
            setCount(count+1)
        }}>Click me</button>
        </div>
    </div>
  );
};

export default Counter
