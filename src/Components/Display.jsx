import css from "./Display.module.css";

function Display({ displayValue }) {
  return <input className={css.displayModule} value={displayValue} readOnly />;
}
export default Display;
