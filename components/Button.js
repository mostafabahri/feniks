import classnames from "classnames";
function BaseButton({ children, className, css, ...rest }) {
  return (
    <button
      className={classnames({
        "px-8 py-3 rounded-full font-bold text-sm": true,
        [className]: true,
        [css]: css,
      })}
      {...rest}
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
