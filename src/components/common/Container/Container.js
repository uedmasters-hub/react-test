import "./Container.css";

function Container({
  children,
  size = "default",
  className = "",
}) {
  return (
    <div
      className={`sw-container sw-container--${size} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;