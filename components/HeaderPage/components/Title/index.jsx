import styles from "./Title.module.scss";

export default function Title(props) {
  return <h1 className={styles.h1}>{props.nameTitleHeader}</h1>;
}
