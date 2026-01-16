import { useState } from "react";

export const InputField = ({
  label,
  type = "text",
  placeholder,
  required = false,
  onValidChange,
  onValueChange,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (val) => {
    if (required && !val) {
      setError("This field is required");
      onValidChange?.(false);
      return;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        setError("Please enter a valid email address");
        onValidChange?.(false);
        return;
      }
    }

    setError("");
    onValidChange?.(true);
  };

  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-4 bg-white px-1 text-sm font-medium text-[#6C25FF]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onValueChange?.(e.target.value);
          validate(e.target.value);
        }}
        className={`
          w-full
          px-4
          pt-5
          pb-3
          rounded-lg
          text-sm
          border
          ${error ? "border-red-500" : "border-gray-300"}
          placeholder-gray-400
          focus:outline-none
          focus:border-[#6C25FF]
        `}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};