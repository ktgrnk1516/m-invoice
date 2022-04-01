import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CPData from "./CPData.json";
import BPData from "./BPData.json";
import GHData from "./GHData.json";
import EDData from "./EDData.json";
import BCData from "./BCData.json";
import HRData from "./HRData.json";
import styles from "./SelectPL.module.scss";

const SelectPL = ({ selectPL, setSelectPL, radioValues }) => {
  const handleChange = (event) => {
    setSelectPL(event.target.value);
    console.log(selectPL);
  };

  return (
    <div sx={{ minWidth: 120 }} className={styles.box}>
      <FormControl fullWidth className={styles.formControll}>
        <InputLabel id="demo-simple-select-label" className={styles.inputLabel}>
          {radioValues === ""
            ? "部署を選択してください"
            : "PL項目を選択してください"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectPL}
          label="Select"
          onChange={handleChange}
          className={styles.select}
        >
          {radioValues === "BP" ? (
            <MenuItem
              className={styles.menu_item}
              value={"システム運用費/編集部"}
            >
              システム運用費/編集部
            </MenuItem>
          ) : null}

          {/* <MenuItem value={"SEO記事制作費/編集部"}>
            SEO記事制作費/編集部
          </MenuItem>
          <MenuItem value={"チーム共通コンテンツ費/編集部"}>
            チーム共通コンテンツ費/編集部
          </MenuItem> */}

          {radioValues === "CP"
            ? CPData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
          {radioValues === "BP"
            ? BPData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
          {radioValues === "GH"
            ? GHData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
          {radioValues === "ED"
            ? EDData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
          {radioValues === "BC"
            ? BCData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
          {radioValues === "HR"
            ? HRData.map((data) => (
                <MenuItem value={data.label} key={data.label}>
                  {data.label}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectPL;
