interface ButtonProps {
  variant?: "default" | "outline" | "text";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  disableShadow?: boolean;
  info?: string;
  hoverActive?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
}
function Button({
  variant = "default",
  disabled = false,
  disableShadow = false,
  size = "md",
  color,
  info,
  hoverActive = false,
  startIcon = false,
  endIcon = false,
}: ButtonProps) {
  let baseClasses = `drop-shadow bg-gray-300 ${
    disabled
      ? "!drop-shadow-none !text-zinc-400 !hover:bg-trasparent"
      : "hover:bg-gray-600/50"
  } ${
    disableShadow ? "!drop-shadow-none" : ""
  } px-4 py-2 text-zinc-700 font-semibold rounded`;
  let variantClasses;
  let variantHoverClasses;
  let sizeClasses;
  let colorClasses;
  let colorHoverClasses;
  let label = "Default";

  switch (variant) {
    case "outline":
      variantClasses =
        "!bg-transparent !drop-shadow-none hover:!bg-blue-700/25 !text-blue-700  border border-blue-700";
      variantHoverClasses =
        "!drop-shadow-none !bg-blue-700/25 !text-blue-700  border border-blue-700";
      break;
    case "text":
      variantClasses = `!bg-transparent !drop-shadow-none ${
        disabled ? "" : "hover:!bg-blue-700/25"
      }  !text-blue-700`;
      variantHoverClasses = "!drop-shadow-none !bg-blue-700/25 !text-blue-700";
      break;
    default:
      variantClasses = "";
      variantHoverClasses = "!bg-gray-600/50";
  }

  switch (size) {
    case "sm":
      sizeClasses = "px-2 py-1";
      break;
    case "lg":
      sizeClasses = "px-5 py-3";
      break;
    default:
      sizeClasses = "px-4 py-2";
  }

  switch (color) {
    case "primary":
      colorClasses = "!bg-blue-500 hover:!bg-blue-900 !text-white";
      colorHoverClasses = "!bg-blue-900 !text-white";
      break;
    case "secondary":
      colorClasses = "!bg-gray-700 hover:!bg-gray-900 !text-white";
      colorHoverClasses = "!bg-gray-900 !text-white";
      label = "secondary";
      break;
    case "danger":
      colorClasses = "!bg-red-500 hover:!bg-red-900 !text-white";
      colorHoverClasses = "!bg-red-900 !text-white";
      label = "danger";
      break;
    default:
      colorClasses = "";
  }

  return (
    <>
      <div className="flex-col">
        <pre className="mb-2">&lt;Button {info}/&gt;</pre>
        <button
          className={`mb-5 inline-flex items-center ${baseClasses} ${variantClasses} ${sizeClasses} ${colorClasses}`}
          disabled={disabled}
        >
          {startIcon ? (
            <>
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              {label}
            </>
          ) : endIcon ? (
            <>
              {label}
              <svg
                className="fill-current w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </>
          ) : (
            <>{label}</>
          )}
        </button>

        {hoverActive ? (
          <>
            <p className="mb-2">&:hover, &:focus</p>

            <button
              className={`${baseClasses} ${variantHoverClasses} ${sizeClasses} ${colorHoverClasses}`}
              disabled={disabled}
            >
              {label}
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Button;
