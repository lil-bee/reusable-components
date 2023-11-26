interface InputProps {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  value?: string;
  info?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  row?: number;
  hoverFocus?: boolean;
}

function Input({
  error = false,
  disabled = false,
  helperText,
  startIcon = false,
  endIcon = false,
  value,
  size = "md",
  info,
  fullWidth = false,
  row,
  hoverFocus = false,
}: InputProps) {
  let baseClasses =
    "border hover:border-gray-900 focus:outline-none border-solid  text-sm rounded-lg  p-2.5   placeholder-gray-400 text-black border-gray-400 focus:!border-blue-700 w-52 bg-transparent";
  let hoverClasses;
  let focusClasses;
  let sizeClasses;

  switch (size) {
    case "sm":
      sizeClasses = "!py-1 !h-8";
      break;
    default:
      sizeClasses = "p-2.5";
  }

  if (hoverFocus) {
    hoverClasses = "!border-gray-900 focus:!border-gray-900";
    focusClasses = error
      ? "!border-red-600 focus:!border-red-600"
      : "!border-blue-700";
  }

  return (
    <>
      {(row || startIcon || endIcon) && (
        <pre className="mb-2">&lt;Input {info}/&gt;</pre>
      )}

      {row && (
        <textarea
          rows={row}
          placeholder="placeholder"
          className={baseClasses}
        ></textarea>
      )}

      {startIcon && (
        <form className="w-52 h-14 ">
          <div className="relative ">
            <div className="absolute inset-y-4 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className={`ps-10 py-4 ${baseClasses}`}
              placeholder="placeholder"
            />
          </div>
        </form>
      )}

      {endIcon && (
        <form className="w-52 h-14 ">
          <div className="relative flex">
            <input
              type="text"
              id="email-address-icon"
              className={`pe-10 py-4 ${baseClasses}`}
              placeholder="placeholder"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
          </div>
        </form>
      )}

      <div className="flex-col items-center justify-center mb-8">
        {!(row || startIcon || endIcon) && (
          <>
            <div className={fullWidth ? "w-full mr-8" : ""}>
              <pre className="mb-2">&lt;Input {info}/&gt;</pre>
              <input
                className={`
                  ${disabled && "!bg-gray-200 !border-gray-500/40"}
                  ${fullWidth && "!w-full"}
                  ${
                    error &&
                    "hover:!border-gray-900 !border-red-600 focus:!border-red-600"
                  }
                  ${sizeClasses} ${baseClasses} h-12 mb-4 `}
                placeholder="placeholder"
                value={value}
                required
                disabled={disabled}
              />
              {helperText && (
                <p className={error ? "text-red-500" : ""}>{helperText}</p>
              )}
            </div>
          </>
        )}
        <div className="flex gap-8 !bg-red-900"></div>
        {hoverFocus && (
          <>
            <div className="flex-col mb-2 gap-8 self-start">
              <pre className="mb-2">&:hover</pre>
              <input
                placeholder="placeholder"
                className={`
              h-12 
              ${baseClasses} 
              ${hoverClasses}
            `}
              />
            </div>
            <div className="flex-col">
              <pre className="mb-2"> &:focus</pre>
              <input
                placeholder="placeholder"
                className={`
              h-12 
              ${baseClasses} 
              ${focusClasses}
            `}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Input;
