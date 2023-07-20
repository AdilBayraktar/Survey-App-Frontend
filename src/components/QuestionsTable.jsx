import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteQuestion, getAllQuestions } from "../redux/services/dataApi";
import CreateModal from "./CreateModal";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { dataActions } from "../redux/slices/dataSlice";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const QuestionsTable = () => {
  const dispatch = useDispatch();
  const { dataList, isLoadingData } = useSelector((state) => state.data);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteQuestion = (id) => {
    swal({
      title: "Are you sure??",
      text: "If you delete this question, you can't recover it!.",
      buttons: true,
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        dispatch(deleteQuestion(id));
        dispatch(dataActions.deletaQuestion(id));
      }
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(getAllQuestions());
  }, [dispatch]);

  return isLoadingData ? (
    <Loader />
  ) : (
    <Container
      component={Paper}
      sx={{ p: 3, maxWidth: "80vw", marginX: "auto", borderRadius: 3 }}
    >
      <Button
        color="success"
        variant="contained"
        sx={{ my: 2 }}
        onClick={handleOpen}
      >
        Create New Question
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Question</TableCell>
              <TableCell align="center">Answer 1</TableCell>
              <TableCell align="center">Answer 2</TableCell>
              <TableCell align="center">Answer 3</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((item) => (
              <TableRow
                key={item?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item?.questionText}</TableCell>
                <TableCell align="center">{item?.answersList[0]}</TableCell>
                <TableCell align="center">{item?.answersList[1]}</TableCell>
                <TableCell align="center">{item?.answersList[2]}</TableCell>
                <TableCell align="center">
                  <Link to={`/admin/question/${item._id}`}>
                    <EditIcon color="success" sx={{ cursor: "pointer" }} />
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <DeleteIcon
                    color="error"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDeleteQuestion(item._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateModal handleClose={handleClose} open={open} />
    </Container>
  );
};

export default QuestionsTable;
