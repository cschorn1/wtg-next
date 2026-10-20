import type { ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
