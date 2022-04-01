//ファイルアップロード
//https://zenn.dev/dove/articles/1927889e1c4153
//https://code-kitchen.dev/html/input-file/

//Fetchを使用してファイルをアップロードする
//https://morioh.com/p/441f41d922e9
//https://freeimage.host/page/api?lang=en&ref=morioh.com&utm_source=morioh.com

//https://www.youtube.com/watch?v=3pQY--GR2sI

import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import styles from "./Pdf.module.scss";

const Pdf = ({ files, setFiles }) => {
  // const [files, setFiles] = useState([]);

  const onFileInputChange = (e) => {
    setFiles([...files, ...e.target.files]);


    console.log(e.target.files[0].name);
  };

  return (
    <div  className={styles.root}>
      <span  className={styles.span}>PDFをアップロードしてください</span>
      <label className={styles.label}>
        <PictureAsPdfIcon />
        <input
          type="file"
          onChange={onFileInputChange}
          accept="application/pdf" //zen参考
          className={styles.u_display_none} //虎ハック参考
        />
      </label>
    </div>
  );
};

export default Pdf;
