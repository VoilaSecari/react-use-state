export default function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} className="btn">
      {text}
    </button>
  );
}
