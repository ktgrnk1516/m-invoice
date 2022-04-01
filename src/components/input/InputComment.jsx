import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./InputComment.module.scss";

const InputComment = ({ inputComment, setInputComment }) => {
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
          placeholder=" 案件・支払内容を記載してください。"
          variant="outlined"
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          className={styles.text_field}
          autoComplete="off"

        />
      </form>
    </div>
  );
};

export default InputComment;
