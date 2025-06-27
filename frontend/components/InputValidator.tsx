import React, { useState } from "react";

interface Props {
  onValidInput: (input: string) => void;
}

const InputValidator: React.FC<Props> = ({ onValidInput }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    if (value.trim().length === 0) {
      setError("Input cannot be empty");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    if (validate(val)) {
      onValidInput(val);
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputValidator;
