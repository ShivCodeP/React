import React from "react";
import styles from "./Form.module.css";

function Form({ onSubmit, children, title }) {
  return (
    <form className={styles.myForm} onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export { Form };
