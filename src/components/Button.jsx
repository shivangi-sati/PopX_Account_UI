export const Button = ({ text, variant = "primary", onClick }) => {
  const styles = {
    primary: "bg-[#6c25ff] text-[#f7f3ff]",
    secondary: "bg-[#cebafb] text-[#1d2226]",
    disabled: "bg-[#cbcbcb] text-white cursor-not-allowed",
  };

  return (
    <button
      type="button"
      disabled={variant === "disabled"}
      onClick={onClick}
      className={`w-full py-3 rounded-lg font-medium ${styles[variant]}`}
    >
      {text}
    </button>
  );
};


