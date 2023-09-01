import './style.css'

const TextInput = ({ onChange, error }) => {

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        onChange={(e) => onChange(e)}
        required
      />
      {error && (
        <div className="error-msg" >{error}</div>
      )}
    </div>
  );
};

export default TextInput;
