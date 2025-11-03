import React,{ useContext } from 'react'
import { ThemeContext } from '../App'
import './ChildC.css'

const ChildC = () => {

    const {theme,setTheme} = useContext(ThemeContext);

    function handleClick(){
        if (theme === 'Light'){
            setTheme('Dark');
        }
        else{
            setTheme('Light');
        }
    }

  return (
    <div>
        <button onClick = {handleClick}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildC
