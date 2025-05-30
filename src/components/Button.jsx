import "../index.css";

export default function Button({ 
  name, trigger, disabled 
}) {
  return (
    <button 
      className="button" 
      onClick={() => trigger()}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
