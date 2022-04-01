import React, { useState } from "react";
import styles from "./App.module.scss";
import Header from "./header/Header";
import PropList from "./propList/PropList";
import MPropList from "./propList/MPropList";

import Pdf from "./components/pdf/Pdf";
import Radio from "./components/radioButton/RadioButton";
import SelectPL from "./components/select/SelectPL";
import SelectCode from "./components/select/SelectCode";
import InputCode from "./components/input/InputCode";
import InputField from "./components/input/InputField";
import InputComment from "./components/input/InputComment";
import AccountingDate from "./components/month/AccountingDate";
import PayDate from "./components/month/PayDate";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "./firebase";

const App = () => {
  const [user] = useAuthState(auth);
  //state達
  const [radioValues, setRadioValues] = useState("");
  const [selectPL, setSelectPL] = React.useState("");
  const [selectCode, setSelectCode] = React.useState("");
  const [inputCode, setInputCode] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputComment, setInputComment] = useState("");

  const [accountingDate, setAccountingDate] = useState("");
  const [payDate, setPayDate] = React.useState("");
  //pdfファイルのstate
  const [files, setFiles] = useState([]);

  return (
    <div>
      {user ? (
        <>
          <Header user={user} />
          <div className={styles.firstPage}>
            <div className={styles.firstPageWrapper}>
              <Radio
                radioValues={radioValues}
                setRadioValues={setRadioValues}
              />

              <div className={styles.secondWrapper}>
                <SelectPL
                  selectPL={selectPL}
                  setSelectPL={setSelectPL}
                  radioValues={radioValues}
                />
                <SelectCode
                  selectCode={selectCode}
                  setSelectCode={setSelectCode}
                  radioValues={radioValues}
                />
                <InputCode inputCode={inputCode} setInputCode={setInputCode} />
              </div>

              <div className={styles.thirdWrapper}>
                <InputField
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </div>

              <div className={styles.forthWrapper}>
                {/* 計上月 */}
                <AccountingDate
                  accountingDate={accountingDate}
                  setAccountingDate={setAccountingDate}
                />
                {/* 支払月 */}
                <PayDate payDate={payDate} setPayDate={setPayDate} />
              </div>
              <div className={styles.sixthWrapper}>
                <InputComment
                  inputComment={inputComment}
                  setInputComment={setInputComment}
                />
              </div>

              <div className={styles.fifthWrapper}>
                {/* PDF提出 */}
                <Pdf files={files} setFiles={setFiles} />
              </div>
            </div>

            {/* <PropList
        radioValues={radioValues}
        selectPL={selectPL}
        selectCode={selectCode}
        inputCode={inputCode}
        inputValue={inputValue}
        accountingDate={accountingDate}
        payDate={payDate}
        files={files}
        inputComment={inputComment}
        /> */}
            <MPropList
              radioValues={radioValues}
              selectPL={selectPL}
              selectCode={selectCode}
              inputCode={inputCode}
              inputValue={inputValue}
              accountingDate={accountingDate}
              payDate={payDate}
              files={files}
              inputComment={inputComment}
              setRadioValues={setRadioValues}
              setSelectPL={setSelectPL}
              setSelectCode={setSelectCode}
              setInputCode={setInputCode}
              setInputValue={setInputValue}
              setInputComment={setInputComment}
              setAccountingDate={setAccountingDate}
              setPayDate={setPayDate}
              setFiles={setFiles}
            />
          </div>
        </>
      ) : (
        <>
          <Header user={user} />
        </>
      )}
    </div>
  );
};

export default App;
