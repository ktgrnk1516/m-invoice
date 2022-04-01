import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./InputField.module.scss";

const InputField = ({ inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      component="form"
      sx={{
        "& > :not(style)": { m: 0, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className={styles.root}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          id="outlined-basic"
          placeholder=" 取引先名"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.text_field}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default InputField;
