import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  console.log('App render - count:', count)

  return (
    <div className="container">
      <h2>Count: {count}</h2>
      <button onClick={() =>dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Inc by Amount</button>
    </div>
  )
}

export default App

























// import React, { useState } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import './App.css'
// import { decrement,increment,incrementByAmount } from './features/counter/CounterSlice'

// function App() {

//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   const [amount,setAmount] = useState(0);

//   function handleIncrementClick(){
//     dispatch(increment())
//   }

//   function handleDecrementClick(){
//     dispatch(decrement())
//   }

//   function handleResetClick(){
//     dispatch(reset())
//   }

//   function handleIncAmountClick(){
//     dispatch(incrementByAmount(Number(amount)))
//   }

//   return (
//     <div className='container'>  
//       <button onClick={handleIncrementClick}>+</button>
//       <p>Count : {count}</p>
//       <button onClick={handleDecrementClick}>-</button>

//       <button onClick={handleResetClick}>Reset</button>
//       <br />
//       <br />

//       <input 
//       type = "Number" 
//       value = {amount}
//       placeholder = 'Enter Amount'
//       onChange = {(e) => setAmount(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={handleResetClick}> Inc by Amount </button>
//     </div>
//   )
// }

// export default App
