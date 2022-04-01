import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SelectCode.module.scss";

const SelectCode = ({ selectCode, setSelectCode }) => {
  const handleChange = (event) => {
    setSelectCode(event.target.value);
    console.log(selectCode);
  };

  return (
    <div className={styles.box}>
      <FormControl fullWidth className={styles.formControll}>
        <InputLabel id="demo-simple-select-label" className={styles.inputLabel}>
          案件コード（※任意）
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCode}
          label="Select"
          onChange={handleChange}
          className={styles.select}
        >
          <MenuItem className={styles.menu_item} value={"MSP"}>
            MSP
          </MenuItem>

          <MenuItem value={"MAB"}>MAB</MenuItem>
          <MenuItem value={"MT"}>MT</MenuItem>
          <MenuItem value={"MSO"}>MSO</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCode;
