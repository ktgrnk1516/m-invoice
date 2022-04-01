import React from "react";
import styles from "./AccountingDate.module.scss";

const AccountingDate = ({ accountingDate, setAccountingDate }) => {
  // const [accountingDate, setAccountingDate] = React.useState("");

  const handleChange = (e) => {
    setAccountingDate(e.target.value);
    console.log(accountingDate);
  };

  return (
    <div className={styles.root}>
      <label htmlFor="">計上月</label>
      <input
        type="month"
        name=""
        id=""
        value={accountingDate}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default AccountingDate;
