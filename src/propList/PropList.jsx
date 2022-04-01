import React, { useState } from "react";
import styles from "./PropList.module.scss";

const PropList = (props) => {
  const {
    radioValues,
    selectPL,
    selectCode,
    inputCode,
    inputValue,
    accountingDate,
    payDate,
    files,
    inputComment,
  } = props;

  //配列
  const [tasks, setTasks] = useState([]);

  //buttonの機能：state達をまとめた配列の作成
  const handleSubmit = () => {
    // // FileReaderオブジェクトを作成:filesをurlに？
    // const reader = new FileReader();
    // // いざファイルをURLとして読み込む
    // reader.readAsDataURL(files);

    //１つでもpropsの値が空欄だったら早期リターンしたい

    //Pdfのfilesが空の時早期リターン
    if (files[0].name === "") {
      return;
    }

    //新しいタスクの作成
    const newRow = {
      radioValues: radioValues,
      selectPL: selectPL,
      selectCode: selectCode,
      inputCode: inputCode,
      inputValue: inputValue,
      accountingDate: accountingDate,
      payDate: payDate,
      inputComment: inputComment,
      files: files,
    };

    // console.log(Object.keys(newRow).length);
    // console.log(Object.keys(props).length);

    setTasks([newRow, ...tasks]);
  };

  return (
    <React.Fragment>
      <button onClick={handleSubmit}>提出</button>

      <div className={styles.table}>
        {/* tr>thとtr>tdをおなじdivで囲うとそれぞれついになってくれる！ */}
        {/* いっこpropsない時はth表示させたくない */}

        <tr className={styles.thead}>
          <th>
            <p>部署</p>
          </th>
          <th>
            <p>PL項目</p>
          </th>
          <th>
            <p>案件番号</p>
          </th>
          <th>
            <p>取引先</p>
          </th>
          <th>
            <p>計上月</p>
          </th>
          <th>
            <p>支払月</p>
          </th>
          <th>
            <p>備考</p>
          </th>
          <th>
            <p>PDF</p>
          </th>
          <th>
            <p>追加PDF</p>
          </th>
          <th>
            <p>チェック</p>
          </th>
          <th>
            <p>印刷</p>
          </th>
          <th>
            <p>削除</p>
          </th>
        </tr>

        {tasks.map((row) => (
          <tr key={row.selectPL} className={styles.trow}>
            <td>
              <p> {row.radioValues}</p>
            </td>
            <td>
              <p> {row.selectPL}</p>
            </td>
            <td>
              <p>
                {row.selectCode}-{row.inputCode}
              </p>
            </td>

            <td>
              <p> {row.inputValue}</p>
            </td>
            <td>
              <p> {row.accountingDate}</p>
            </td>
            <td>
              <p> {row.payDate}</p>
            </td>
            <td>
              <p> {row.inputComment}</p>
            </td>
            <td className={styles.santen}>
              <p>{row.files[0].name}</p>
            </td>
          </tr>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PropList;
