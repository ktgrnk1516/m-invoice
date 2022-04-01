import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ radioValues, setRadioValues }) => {
  const handleChange = (e) => {
    setRadioValues(e.target.value);
    console.log(radioValues);
  };

  return (
    <FormControl className={styles.root}>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        className={styles.label}
      >
        費用の発生部署を選択してください。
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className={styles.group}
      >
        <FormControlLabel
          value="CP"
          control={<Radio />}
          label="コンテンツプロデュース事業部"
          onChange={handleChange}
        />
        <FormControlLabel
          value="BP"
          control={<Radio />}
          label="ブランドプロデュース事業部"
          onChange={handleChange}
        />
        <FormControlLabel
          value="GH"
          control={<Radio />}
          label="Grain Hit部"
          onChange={handleChange}
        />
        <FormControlLabel
          value="ED"
          control={<Radio />}
          label="編成部"
          onChange={handleChange}
        />
        <FormControlLabel
          value="BC"
          control={<Radio />}
          label="ブランド&クリエーション事業部"
          onChange={handleChange}
        />
        <FormControlLabel
          value="HR"
          control={<Radio />}
          label="人事部"
          onChange={handleChange}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
