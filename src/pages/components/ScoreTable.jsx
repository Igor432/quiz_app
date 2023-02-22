import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styles from "@/styles/scoreTable.module.css";


export const ScoreTable = ({ questionNum, answer }) => {
  const [number, setNumber] = useState(0);
  const [row, setRow] = useState([]);

  if (row !== undefined) {
    useEffect(() => {
      setNumber(questionNum);

      setRow([...row, { [questionNum]: answer }]);
    }, [questionNum, answer]);
  }



 
  return (
    <TableContainer component={Paper}   style={{ width: 650, marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}>
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{  textAlign: 'left'
          }}  >Question #</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }} className={styles.table_number}>1</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }} className={styles.table_number}>2</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }} className={styles.table_number}>3</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }} className={styles.table_number}>4</TableCell>
            <TableCell align="right" style={{ textAlign: 'center' }}  className={styles.table_number}>5</TableCell>
            <TableCell align="right" style={{ textAlign: 'center' }}className={styles.table_number}>6</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }}className={styles.table_number}>7</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }}className={styles.table_number}>8</TableCell>
            <TableCell align="right" style={{  textAlign: 'center' }}className={styles.table_number}>9</TableCell>
            <TableCell align="right" style={{ textAlign: 'center' }}className={styles.table_number}>10</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={row}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Score
            </TableCell>
            {delete row[0] && row.map((rowy, index) => (
              <TableCell key={index} className={styles.table_answer} style={{  textAlign: 'center' }}>
                {rowy[index] === "bad" ? <HighlightOffIcon style={{ color: "#ed6c02" }}/> : <DoneOutlineIcon style={{ color: "#4caf50" }}/>}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/*
              {row.length> 0 && row.map((rowy) =>(
                <TableCell key={row}>{rowy}</TableCell>
             ) )}

*/
