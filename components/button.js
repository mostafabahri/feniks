import classnames from "classnames";
function BaseButton({ children, className }) {
  return (
    <button
      className={classnames({
        "px-6 py-2 rounded-full": true,
        [className]: true,
      })}
    >
      {children}
    </button>
  );
}
function TomatoButton(props) {
  return <BaseButton className="bg-tomato text-white" {...props} />;
}
function SnowButton(props) {
  return <BaseButton className="text-tomato bg-snow" {...props} />;
}
export function Button({ theme, ...props }) {
  const ThemeButton = {
    tomato: TomatoButton,
    snow: SnowButton,
  }[theme];

  return <ThemeButton {...props} />;
}
