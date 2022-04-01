import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles, createStyles } from "@material-ui/core/styles";

//firebase関連
import db from "../firebase";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  Timestamp,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { CheckBox } from "@mui/icons-material";

//material-uiのスタイルをhook APIで変更する
const useStyles = makeStyles(() =>
  createStyles({
    tablestyle: {
      backgroundColor: "white",
      fontSize: "12px",
      borderColor: "aqua",
      textAlign: "center",
    },
    thead: {
      textAlign: "center",
      fontSize: "12px",
      whiteSpace: "nowrap",
    },
    tbody: {
      minWidth: "200px",
      textAlign: "center",
      fontSize: "12px",
      whiteSpace: "normal",
    },
    bicou: {
      minWidth: "120px",
      textAlign: "center",
      fontSize: "12px",
      whiteSpace: "nomarl",
    },
  })
);
//ここまで

const MPropList = (props) => {
  const classes = useStyles();

  const {
    radioValues,
    selectPL,
    selectCode,
    inputCode,
    inputComment,
    inputValue,
    accountingDate,
    payDate,
    files,
    //set関数
    setRadioValues,
    setSelectPL,
    setSelectCode,
    setInputCode,
    setInputValue,
    setInputComment,
    setAccountingDate,
    setPayDate,
    setFiles,
  } = props;

  //配列
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(tasks.length);
  const [ID, setID] = useState("");
  // const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    //データベースからデータを取得する。
    const rowData = query(collection(db, "rows"), orderBy("timestamp", "desc"));

    // console.log(rowData);
    getDocs(rowData).then((snapShot) => {
      setTasks(
        snapShot.docs.map((doc) => ({
          //  ...doc.data()
          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id,
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
          files: doc.data().files,
        }))
      );
    });
  }, []);

  //firebaseにデータを追加するように実装する//

  const handleSubmit = () => {
    //１つでもpropsの値が空欄だったら早期リターンしたい
    //Pdfのfilesが空の時早期リターン
    if (files === "") {
      alert("PDFを添付してください");
      return;
    }
    setCount((prev) => prev + 1);

    //データベースにデータを格納する
    const createTask = async () => {
      try {
        //現在時刻の取得
        const myTimestamp = Timestamp.now();
        const timestamp = myTimestamp.toDate();
        //新しくタスクを作成
        const newRow = await addDoc(collection(db, "rows"), {
          isSelected: false,
          isPrinted: false,
          id: count,
          timestamp: timestamp,
          //props
          radioValues: radioValues,
          selectPL: selectPL,
          selectCode: selectCode,
          inputCode: inputCode,
          inputValue: inputValue,
          accountingDate: accountingDate,
          payDate: payDate,
          inputComment: inputComment,
          files: files[0].name,
        });
        console.log("Document written with ID: ", newRow.id);
        setID(newRow.id);
        //これが自動生成されたID？？？？
      } catch (err) {
        console.log("Error writing document:", err);
      }
    };
    createTask();

    //データベースからデータを取得する。

    const rowData = query(collection(db, "rows"), orderBy("timestamp", "desc"));

    // console.log(rowData);
    getDocs(rowData).then((snapShot) => {
      console.log(
        snapShot.docs.map((doc) => ({
          //  ...doc.data()

          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id,
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
        }))
      );

      setTasks(
        snapShot.docs.map((doc) => ({
          //  ...doc.data()
          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id,
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
          files: doc.data().files,
        }))
      );
    });

    // //新しいタスクの作成
    // const newRow = {
    //   // isSelected: false,
    //   // isPrinted: false,
    //   // id: count,

    //   // //props
    //   // radioValues: radioValues,
    //   // selectPL: selectPL,
    //   // selectCode: selectCode,
    //   // inputCode: inputCode,
    //   // inputValue: inputValue,
    //   // accountingDate: accountingDate,
    //   // payDate: payDate,
    //   // inputComment: inputComment,
    //   // files: files,
    //   checkButton: (
    //     <Checkbox
    //       color="primary"
    //       // checked={isItemSelected}
    //     />
    //   ),
    //   printButton: (
    //     <Checkbox
    //       color="primary"
    //       // checked={isItemSelected}
    //     />
    //   ),
    //   // deleteButton: <button onClick={(e) => handleDelete(e)}>削除</button>,
    // };

    // // console.log(Object.keys(newRow).length);
    // // console.log(Object.keys(props).length);

    //入力を空にしたい
    setRadioValues("");
    setSelectPL("");
    setSelectCode("");
    setInputCode("");
    setInputValue("");
    setInputComment("");
    setAccountingDate("");
    setPayDate("");
    setFiles("");
  };

  //firebaseからデータをとる//

  // useEffect(() => {
  //   //データベースからデータを取得する。
  //   const rowData = collection(db, "rows");
  //   // console.log(rowData);
  //   getDocs(rowData).then((snapShot) => {
  //     console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //     setTasks(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //   });
  // }, [setCount]);

  //【Firebase入門】#3-2 ~Firestoreとの連携後編~
  //状態tasksをfirebaseにaddしたい（あべちゃんはrdks toolkitだからuseState使ってない
  //★★★★★newRow関数をfirebaseと連携させる！！！！！★★★★

  //チェックのところのチェック機能の実装
  const handleSelect = async (row) => {
    await setDoc(
      doc(db, "rows", row.id),
      {
        isSelected: !row.isSelected,
      },
      { merge: true }
    );
    //データベースからデータを取得する。

    const rowData = query(collection(db, "rows"), orderBy("timestamp", "desc"));
    // console.log(rowData);
    getDocs(rowData).then((snapShot) => {
      setTasks(
        snapShot.docs.map((doc) => ({
          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id, //こここが自動で生成されたIDを取得している。
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
          files: doc.data().files,
        }))
      );
    });
  };

  //チェックのところのプリントのチェック機能の実装

  const handlePrint = async (row) => {
    await setDoc(
      doc(db, "rows", row.id),
      {
        isPrinted: !row.isPrinted,
      },
      { merge: true }
    );
    //データベースからデータを取得する。

    const rowData = query(collection(db, "rows"), orderBy("timestamp", "desc"));
    // console.log(rowData);
    getDocs(rowData).then((snapShot) => {
      setTasks(
        snapShot.docs.map((doc) => ({
          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id, //こここが自動で生成されたIDを取得している。
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
          files: doc.data().files,
        }))
      );
    });
  };

  //削除ボタンの機能
  const handleDelete = async (row) => {
    try {
      //自動生成されたIDを指定しないとだめ！！

      console.log(row);
      await deleteDoc(doc(db, "rows", row.id));
    } catch (err) {
      console.log("delete error", err);
    }

    //データベースからデータを取得する。

    const rowData = query(collection(db, "rows"), orderBy("timestamp", "desc"));
    // console.log(rowData);
    getDocs(rowData).then((snapShot) => {
      setTasks(
        snapShot.docs.map((doc) => ({
          isSelected: doc.data().isSelected,
          isPrinted: doc.data().isPrinted,
          id: doc.id, //こここが自動で生成されたIDを取得している。
          timestamp: doc.data().timestamp,
          //props
          radioValues: doc.data().radioValues,
          selectPL: doc.data().selectPL,
          selectCode: doc.data().selectCode,
          inputCode: doc.data().inputCode,
          inputValue: doc.data().inputValue,
          accountingDate: doc.data().accountingDate,
          payDate: doc.data().payDate,
          inputComment: doc.data().inputComment,
          files: doc.data().files,
        }))
      );
    });

    //firebase前の実装↓
    // console.log(row.id);
    // setTasks(tasks.filter((t) => t.id !== row.id));
    // const updateRows = tasks.filter((t) => t.id !== selectRow.id);
  };

  return (
    <>
      <button onClick={handleSubmit}>提出</button>
      <TableContainer component={Paper}>
        <Table
          className={classes.tablestyle}
          // sx={{ minWidth: 150 }}
          // aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.thead}>部署</TableCell>
              <TableCell className={classes.thead}>PL項目</TableCell>
              <TableCell className={classes.thead}>案件番号</TableCell>
              <TableCell className={classes.thead}>取引先</TableCell>
              <TableCell className={classes.thead}>計上月</TableCell>
              <TableCell className={classes.thead}>支払月</TableCell>
              <TableCell className={classes.thead}>備考</TableCell>
              <TableCell className={classes.thead}>PDF</TableCell>
              {/* <TableCell>追加PDF</TableCell> */}
              <TableCell className={classes.thead}>チェック</TableCell>
              <TableCell className={classes.thead}>印刷</TableCell>
              <TableCell className={classes.thead}>削除</TableCell>
              {/* <TableCell className={classes.thead}>id</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody
            style={{
              backgroundColor: "#eee",
            }}
          >
            {tasks.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.radioValues}
                </TableCell>
                <TableCell align="right"
                className={classes.bicou}
                >{row.selectPL}</TableCell>
                <TableCell align="right">
                  {row.selectCode}-{row.inputCode}
                </TableCell>
                <TableCell align="right">{row.inputValue}</TableCell>
                <TableCell align="right">{row.accountingDate}</TableCell>
                <TableCell align="right">{row.payDate}</TableCell>
                <TableCell align="right" className={classes.bicou}>
                  {row.inputComment}
                </TableCell>
                <TableCell align="right" className={classes.tbody}>
                  {row.files}
                </TableCell>
                <TableCell align="right">
                  <input
                    type="checkbox"
                    checked={row.isSelected}
                    onClick={() => handleSelect(row)}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="checkbox"
                    checked={row.isPrinted}
                    onClick={() => handlePrint(row)}
                  />
                </TableCell>

                {/* 削除ボタンは元からreturn下に作っておく！（newTaskで作成しない） */}
                <TableCell align="right">
                  <button
                    onClick={() => handleDelete(row)}
                    style={{
                      padding: "2px 4px",
                      margin: "0px",
                      borderRadius: "2px",
                      backgroundColor: "gray",
                    }}
                  >
                    ×
                  </button>
                </TableCell>
                {/* <TableCell align="right">{row.id}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MPropList;
