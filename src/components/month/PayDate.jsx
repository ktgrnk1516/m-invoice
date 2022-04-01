import React from "react";
import styles from "./PayDate.module.scss";

const PayDate = ({ payDate, setPayDate }) => {
  // const [payDate, setPayDate] = React.useState("");

  const handleChange = (e) => {
    setPayDate(e.target.value);
    console.log(payDate);
  };

  return (
    <div className={styles.root}>
      <label htmlFor="">支払月</label>
      <input
        type="month"
        name=""
        id=""
        value={payDate}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default PayDate;
