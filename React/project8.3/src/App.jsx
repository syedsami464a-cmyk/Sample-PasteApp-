// App.jsx
import { useState } from 'react';
import './App.css';
import ColorSwitch from './components/ColorSwitch';

function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutSide() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    const r = 150 + Math.round(Math.random() * 100);
    const g = 150 + Math.round(Math.random() * 100);
    const b = 150 + Math.round(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    document.body.style.backgroundColor = getRandomLightColor();
  }

  return (
    <div
      style={{ width: '100%', height: '100vh' }}
      onClick={handleClickOutSide}
    >
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}

export default App;
