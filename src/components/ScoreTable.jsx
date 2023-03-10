import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styles from "@/styles/scoreTable.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getRows } from "@/redux/selectors";

export const ScoreTable = () => {

  const rows = useSelector(getRows)



  const upperRows = [];
  const router = useRouter();
  const Ammount = router.query.ammount;

  for (let i = 1; i <= Ammount; i++) {
    upperRows.push(i);
  }



  return (
    <TableContainer className={styles.Table_container}
      component={Paper}
      style={{
        minWidth: 250,
        maxWidth: 750,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "left" }}>Question #</TableCell>
            {upperRows &&
              upperRows.map((row, index) => (
                <TableCell
                  align="right"
                  style={{ textAlign: "center", width: 30 }}
                  key={index}
                  className={styles.table_number}
                >
                  {row}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={0}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ width: 30 }}>
              Score
            </TableCell>
            {rows &&
              rows.map((rows, index) => (
                <TableCell
                  key={index}
                  className={styles.table_answer}
                  style={{
                    textAlign: "center",
                    width: 30,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  {rows[index] === "bad" ? (
                    <HighlightOffIcon style={{ color: "#ed6c02" }} />
                  ) : (
                    <DoneOutlineIcon style={{ color: "#4caf50" }} />
                  )}
                </TableCell>
              ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
