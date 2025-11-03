// components/ColorSwitch.jsx
export default function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}
    