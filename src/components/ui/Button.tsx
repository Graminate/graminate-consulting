type Props = {
  text?: string;
  arrow?: "" | "up" | "down" | "left" | "right";
  style?: "primary" | "secondary" | "ghost" | "home";
  isDisabled?: boolean;
  width?: "small" | "medium" | "large";
  add?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({
  text = "Button",
  arrow = "",
  style = "primary",
  isDisabled = false,
  width,
  add = false,
  type = "button",
  onClick,
}: Props) => {
  const getWidth = (): string => {
    switch (width) {
      case "small":
        return "w-1/12";
      case "medium":
        return "w-1/6";
      case "large":
        return "w-full";
      default:
        return "";
    }
  };

  const getButtonClass = (): string => {
    switch (style) {
      case "home":
        return "bg-white text-gray-200 text-sm my-10 py-3 px-7 rounded-md shadow-lg hover:bg-gray-400 border border-solid border-gray-300";
      case "primary":
        return "bg-green-200 text-sm hover:bg-green-100 disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 text-white justify-center";
      case "secondary":
        return "bg-white m-1 text-sm disabled:text-gray-400 disabled:bg-transparent disabled:border-gray-300 hover:bg-green-200 hover:text-white  text-green-200 hover:text-green-200 border border-green-200 justify-center";
      case "ghost":
        return "bg-transparent hover:bg-gray-500 text-sm font-semibold text-gray-200 justify-center disabled:text-gray-300 disabled:bg-transparent";
      default:
        return "";
    }
  };

  const buttonClass = `${getButtonClass()} py-1 px-2 rounded rounded-md ${getWidth()}`;

  const arrowIcons: Record<string, string> = {
    up: "M5 15l5-5 5 5",
    down: "M5 11l5 5 5-5",
    left: "M15 19l-7-7 7-7",
    right: "M9 5l7 7-7 7",
  };

  const addIcon = add ? "M12 4.5v15m7.5-7.5h-15" : "";

  return (
    <button
      type={type}
      className={`${buttonClass} flex items-center`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {add && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={addIcon} />
        </svg>
      )}

      {arrow === "left" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={arrowIcons[arrow]}
          />
        </svg>
      )}

      {text}

      {["right", "up", "down"].includes(arrow) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={arrowIcons[arrow]}
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
