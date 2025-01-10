import styles from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonclick }) {
  let btnArray = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "6",
    "5",
    "4",
    "-",
    "3",
    "2",
    "1",
    "+",
    ".",
    "0",
    "=",
  ];

  return (
    <div className={styles.btncontain}>
      {btnArray.map((btns) => (
        <button className={styles.btn} onClick={() => onButtonclick(btns)}>
          {btns}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
