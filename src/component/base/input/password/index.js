const PasswordInput = ({onChange, error}) => {
  return (
    <div>
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        aria-label="Password"
        onChange={(e) => onChange(e)}
      />
      {error && (
        <div className="error-msg" >{error}</div>
      )}
    </div>
  );
};

export default PasswordInput;
