import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./InputCode.module.scss";

const InputCode = ({ inputCode, setInputCode }) => {
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
      className={styles.box}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type=""
          id="outlined-basic"
          placeholder="  案件番号（※任意）"
          variant="outlined"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className={styles.input}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default InputCode;
